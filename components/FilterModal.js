import { useState, forwardRef } from "react";
import { 
    Button, 
    Autocomplete, 
    TextField, 
    Dialog, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Slide, 
    Box,
    Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ 
    showFilters, 
    setShowFilters, 
    
    recipes,
    setResults,

    poisons, 
    filterResultsByPoison,

    ingredients,
    filterResultsByIngredient,
}) {

    const [selectedPoisonsTemp, setSelectedPoisonsTemp] = useState([]);
    const [selectedIngredientsTemp, setSelectedIngredientsTemp] = useState([]);

    const handleClose = () => {
        setShowFilters(false);
    };

    const clearFilters = () => {
        setResults(filterResultsByPoison(recipes, []));
        setResults(filterResultsByIngredient(recipes, []));
        setSelectedPoisonsTemp([]);
        setSelectedIngredientsTemp([]);
        handleClose();
    }

    const applyFilterByPoison = () => {
        setResults(filterResultsByPoison(recipes, selectedPoisonsTemp));
        handleClose();
    }

    const applyFilterByIngredient = () => {
        setResults(filterResultsByIngredient(recipes, selectedIngredientsTemp));
        handleClose();
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={showFilters}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Filter recipes
                        </Typography>
                        <Button autoFocus color="inherit" onClick={clearFilters}>
                            Clear
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box padding={3}>
                    <form onSubmit={e => {
                          e.preventDefault();
                          applyFilterByPoison();
                    }}>
                        <Stack spacing={1}>
                            <Typography>Which recipes contain all of these "poisons"?</Typography>
                            <Autocomplete
                                style={{ width: "100%" }}
                                multiple
                                options={poisons}
                                getOptionLabel={(option) => option}
                                defaultValue={[]}
                                value={selectedPoisonsTemp}
                                onChange={(_, val) => {
                                    setSelectedPoisonsTemp(val);
                                }}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                    />
                                )}
                            />
                            <Button style={{ padding: 15 }} type="submit" variant="contained">
                                Apply
                            </Button>
                        </Stack>
                    </form>
                </Box>

                <Box padding={3}>
                    <form onSubmit={e => {
                        e.preventDefault();
                        applyFilterByIngredient();
                    }}>
                        <Stack spacing={1}>
                            <Typography>What can I make with these ingredients?</Typography>
                            <Autocomplete
                                multiple
                                options={ingredients}
                                getOptionLabel={(option) => option}
                                defaultValue={[]}
                                value={selectedIngredientsTemp}
                                onChange={(_, val) => {
                                    setSelectedIngredientsTemp(val);
                                }}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                    />
                                )}
                            />
                            <Button style={{ padding: 15 }} type="submit" variant="contained">
                                Apply
                            </Button>
                        </Stack>
                    </form>
                </Box>

            </Dialog>
        </div>
    );
}
