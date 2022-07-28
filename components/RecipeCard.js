import styles from "../styles/RecipeCard.module.css";
import { Card, Grid, Box, Stack, Typography, Chip } from "@mui/material";
import Link from 'next/link'

const RecipeCard = ({recipe}) => {
    return (
        <Link href={`/recipe/${recipe._id}`}>
            <a>
                <Card>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box padding={1}>
                                <img
                                    className={styles.profile_img}
                                    src={recipe.profile_img}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={8} zeroMinWidth>
                            <Box padding={1}>
                                <Stack paddingTop={1}>
                                    <Typography variant="recipe-card-title">
                                        {recipe.name}
                                    </Typography>

                                    <Grid style={{ marginTop: 5 }} container spacing={0.5}>
                                        {recipe.poisons.map((poison, i) => (
                                            <Grid item key={i}>
                                                <Chip label={poison} className={styles.poison_chip} />
                                            </Grid>
                                        ))}
                                        {recipe.tags.map((tag, i) => (
                                            <Grid item key={i}>
                                                <Chip label={tag} className={styles.tag_chip} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </a>
        </Link>
    )
}

export default RecipeCard;