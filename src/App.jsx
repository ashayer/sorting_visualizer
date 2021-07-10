import React from "react";
import {AppBar,Button,Toolbar,Typography, Select, FormControl} from "@material-ui/core";
import {useStyles, ArraySlider} from "./styles";
import {ButtonGroup } from "@material-ui/core";
import DivCreator from "./divCreator";
import './divCreator.css';
import { MenuItem } from "@material-ui/core";



export default function App() {
    const classes = useStyles();

    function TopAppBar(){
        return (
        <div className={classes.topToolBarDiv}>
            <AppBar position="sticky" >
            <Toolbar className={classes.topToolBar}>
                  <Typography variant="subtitle1" style={{paddingRight: "10vh",}}>
                    Test
                    Test
                  </Typography>
                  <Typography variant="h2">
                    Sorting App
                  </Typography>
                  <ButtonGroup variant="contained">
                    <Button>Fast</Button>
                    <Button>Normal</Button>
                    <Button>Slow</Button>
                  </ButtonGroup>
            </Toolbar>
            </AppBar> 
        </div>
            
        );
    }

    function BottomAppBar(){
        return (
                <AppBar className={classes.bottomAppBar}>
                    <Toolbar className={classes.bottomToolBar}>
                        <FormControl className={classes.algSelect}>
                            <Select defaultValue={"M_SORT"}>
                                <MenuItem value = {"M_SORT"}>Merge Sort</MenuItem>
                                <MenuItem value = {"I_SORT"}>Insertion Sort</MenuItem>
                                <MenuItem value = {"S_SORT"}>Selection Sort</MenuItem>
                                <MenuItem value = {"Q_SORT"}>Quick Sort</MenuItem>
                                <MenuItem value = {"B_SORT"}>Bubble Sort</MenuItem>
                                <MenuItem value = {"H_SORT"}>Heap Sort</MenuItem>
                            </Select>
                        </FormControl>
                        <ArraySlider
                            defaultValue = {30}
                            step={5}
                            min={30}
                            max={300}
                            valueLabelDisplay="auto"
                        />
                        <FormControl className={classes.algSelect}>
                            <Select defaultValue={"Q_SORT"}>
                                <MenuItem value = {"M_SORT"}>Merge Sort</MenuItem>
                                <MenuItem value = {"I_SORT"}>Insertion Sort</MenuItem>
                                <MenuItem value = {"S_SORT"}>Selection Sort</MenuItem>
                                <MenuItem value = {"Q_SORT"}>Quick Sort</MenuItem>
                                <MenuItem value = {"B_SORT"}>Bubble Sort</MenuItem>
                                <MenuItem value = {"H_SORT"}>Heap Sort</MenuItem>
                            </Select>
                        </FormControl>
                        
                    </Toolbar>
                </AppBar>
        );
    }

    return(
        <div>
            <TopAppBar/>
            <DivCreator/>
            <BottomAppBar/>
        </div>
             
        
        
    );
}

