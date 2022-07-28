import { useState, forwardRef } from "react";
import { Button, Autocomplete, TextField, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Box } from '@mui/material';
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
}) {

    const [selectedPoisonsTemp, setSelectedPoisonsTemp] = useState([]);

    const handleClose = () => {
        setShowFilters(false);
    };

    const clearFilters = () => {
        setResults(filterResultsByPoison(recipes, []));
        setSelectedPoisonsTemp([]);
        handleClose();
    }

    const applyFilters = () => {
        setResults(filterResultsByPoison(recipes, selectedPoisonsTemp));
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
                        <Button autoFocus color="inherit" onClick={applyFilters}>
                            Apply
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box padding={5}>
                    <Typography>Filter by poison</Typography>
                    <Autocomplete
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
                </Box>


            </Dialog>
        </div>
    );
}
