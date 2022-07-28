import styles from "../../styles/recipe[_id].module.css";
import clientPromise from '../../lib/mongodb';
import { Typography, Stack, Paper, TextField, Grid, Box, Divider, ToggleButton, ToggleButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [{
                props: { variant: "headline" },
                style: {
                    fontWeight: "bold",
                }
            }, {
                props: { variant: "title" },
                style: {
                    fontWeight: "bold",
                }
            }, {
                props: { variant: "comment" },
                style: {
                    fontWeight: "light",
                    fontSize: 14,
                }
            }, {
                props: { variant: "ingredient" },
                style: {
                    fontWeight: "light",
                    fontSize: 16,
                }
            }]
        }
    }
});

const updateLabels = (recipe, servings, measurementUnit) => {
    recipe.volume = 0;
    recipe.ingredients.map(ing => {

        let quantity;

        if (ing.quantifiable === true) {
            switch (measurementUnit) {
                case "oz":
                    ing.serving_quantity = ing.quantityOZ;
                    break;
                case "ml":
                    ing.serving_quantity = ing.quantityML;
                    break;
                default:
                    break;
            }
            quantity = ing.serving_quantity * servings;
            ing.label = `${ing.serving_quantity}${measurementUnit} ${ing.name}`;
            if (servings > 1) ing.label += ` (${quantity}${measurementUnit} total)`;
            ing.quantity = quantity;
            recipe.volume += quantity;
        } else {
            ing.serving_quantity = ing.quantity;
            quantity = ing.serving_quantity * servings;
            ing.label = `${ing.serving_quantity} ${ing.unit}`;
            if (servings > 1) ing.label += ` (${quantity} total)`;
        }
        return ing;
    });
    return recipe;
}

const Recipe = ({ recipe, graphs }) => {

    const [servings, setServings] = useState(1);
    const [measurementUnit, setMeasurementUnit] = useState("oz");

    // update labels on render
    recipe = updateLabels(recipe, servings, measurementUnit);
    
    useEffect(() => {
        // everytime state changes, update labels
        recipe = updateLabels(recipe, servings, measurementUnit);
    })

    return (
        <ThemeProvider theme={theme}>
            <Stack style={{ marginBottom: 100 }}>
                <img
                    className={styles.banner_img}
                    src={recipe.banner_img}
                />
                <Box padding={3}>
                    <Typography variant="h4" style={{ textAlign: "center", marginTop: "2rem" }}>
                        {recipe.name}
                    </Typography>
                </Box>

                <Box padding={2}>
                    <Stack direction="row">

                        <TextField
                            value={servings}
                            onChange={(e) => setServings(e.target.value)}
                            label="Servings"
                            type="number"
                            style={{ width: "100%" }}
                        />

                        <ToggleButtonGroup
                            value={measurementUnit}
                            exclusive
                            onChange={(_, val) => {
                                if (val !== null) {
                                    setMeasurementUnit(val)
                                }
                            }}
                            style={{ marginLeft: 15 }}
                        >
                            <ToggleButton style={{ padding: 15 }} value="oz">OZ</ToggleButton>
                            <ToggleButton style={{ padding: 15 }} value="ml">ML</ToggleButton>
                        </ToggleButtonGroup>

                    </Stack>
                </Box>

                <Box padding={2}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Stack>
                                <Typography variant="headline">Vessel</Typography>
                                <Typography>{recipe.vessel}</Typography>

                                <br></br>

                                <Typography variant="headline">Ingredients</Typography>
                                {recipe.ingredients.map((ing, i) => {
                                    return <Typography variant="ingredient" key={i}>{ing.label ? ing.label : ""}</Typography>
                                })}
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack
                                direction="column"
                                spacing={1}
                                style={{ height: "100%", paddingLeft: 15 }}
                            >
                                { recipe.ingredients.map((ing, i) => {
                                    if (ing.quantifiable) {
                                        const height = ing.quantity / recipe.volume * 100;
                                        let color = "gray";
                                        let m = (graphs.filter(x => x.name === ing.name));
                                        if (m.length > 0 ) {
                                            color = m[0].color;
                                        }
                                        return (
                                            <Paper  
                                                key={i} 
                                                elevation={2}
                                                style={{ 
                                                    textAlign: "center",
                                                    height: `${height}%`,
                                                    backgroundColor: color,
                                                    borderRadius: 8,
                                            }}>
                                                <p style={{ marginTop: 10, color: "white", wordBreak: "break-all" }}>{ height < 15 ? "" : ing.name }</p>
                                            </Paper>
                                        );
                                    }
                                }) }
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                <Divider style={{ marginTop: 30 }}>RECIPE</Divider> 

                <Box padding={2}>
                    {recipe.steps.map((step, i) => (
                        <div key={i}>
                            <Typography component="p" variant="title">{i + 1}. {step.title}</Typography>
                            <Typography component="p" variant="comment">{step.comment}</Typography>
                            {step.ingredients?.map((ing, j) => {
                                let m = recipe.ingredients.filter(_ing => ing === _ing.name);
                                if (m.length > 0 && m[0].label) {
                                    return <Typography component="p" variant="ingredient" key={j}>{m[0].label}</Typography>;
                                } 
                            })}
                            <br></br>
                        </div>
                    ))}
                </Box>


            </Stack>
            <Footer />
        </ThemeProvider>
    )
}

export async function getStaticPaths() {
    const client = await clientPromise;
    const db = await client.db("recepi");
    const recipes = await db.collection("recipes").find({}, { _id: 1 }).toArray();
    const paths = recipes.map((recipe) => ({
        params: { _id: recipe._id.toString() },
    }))
    return { paths, fallback: false } // { fallback: false } means other routes should 404.
}

export async function getStaticProps({ params }) {
    const client = await clientPromise;
    const db = await client.db("recepi");
    const recipeMatches = await db.collection("recipes").find({ _id: params._id }).toArray();
    const recipe = recipeMatches.length > 0 ? recipeMatches[0] : null;
    const graphs = await db.collection("graphs").find({}).toArray();
    return { props: { recipe, graphs } }
}

export default Recipe