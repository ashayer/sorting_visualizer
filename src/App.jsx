import React from "react";
import SortIcon from '@material-ui/icons/Sort';
import {AppBar,Button,Toolbar,Typography, NativeSelect} from "@material-ui/core";
import {useStyles, ArraySlider} from "./styles";
import {ButtonGroup } from "@material-ui/core";
import DivCreator from "./divCreator";
import './divCreator.css';



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
                  <Typography variant="h3">
                  <SortIcon></SortIcon>
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
                        <NativeSelect 
                            defaultValue={"I_SORT"}>
                            <option value = {"M_SORT"}>Merge Sort</option>
                            <option value = {"I_SORT"}>Insertion Sort</option>
                            <option value = {"S_SORT"}>Selection Sort</option>
                            <option value = {"Q_SORT"}>Quick Sort</option>
                            <option value = {"B_SORT"}>Bubble Sort</option>
                            <option value = {"H_SORT"}>Heap Sort</option>
                            </NativeSelect>
                        <ArraySlider
                            defaultValue = {30}
                            step={30}
                            min={30}
                            max={300}
                            valueLabelDisplay="auto"
                        />
                        <NativeSelect
                            defaultValue={"S_SORT"}>
                            <option value = {"M_SORT"}>Merge Sort</option>
                            <option value = {"I_SORT"}>Insertion Sort</option>
                            <option value = {"S_SORT"}>Selection Sort</option>
                            <option value = {"Q_SORT"}>Quick Sort</option>
                            <option value = {"B_SORT"}>Bubble Sort</option>
                            <option value = {"H_SORT"}>Heap Sort</option>
                        </NativeSelect>
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

