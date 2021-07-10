import React from "react";
import {AppBar,Button,Toolbar,Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {ButtonGroup } from "@material-ui/core";
import DivCreator from "./divCreator";
import './divCreator.css';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {ArraySlider } from './styles';

function TopAppBar(){
    const classes = useStyles();
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


function BottomAppBar() {

    const [currVal, setVal] = React.useState(30);
    const [currLeftAlg, setLeftAlg] = React.useState("B_SORT");
    const [currRightAlg, setRightAlg] = React.useState("B_SORT");

    const classes = useStyles();

    const updateVal = (e, data) => {
        setVal(data)
    }

    const updateLeftAlg = (e) => {
        setLeftAlg(e.target.value);
    }

    const updateRightAlg = (e) => {
        setRightAlg(e.target.value);
    }
    return (
        <div>
        <AppBar className={classes.bottomAppBar}>
            <Toolbar className={classes.bottomToolBar}>
                <FormControl className={classes.algSelect}>
                    <Select 
                        defaultValue= "M_SORT"
                        value = {currLeftAlg}
                        onChange = {updateLeftAlg}
                    >
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
                    value = {currVal}
                    onChange = {updateVal}
                />
                <FormControl className={classes.algSelect}>
                    <Select 
                        defaultValue="Q_SORT"
                        value = {currRightAlg}
                        onChange = {updateRightAlg}
                    >
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

        <DivCreator sliderVal = {currVal} leftAlgSelect = {currLeftAlg} rightAlgSelect = {currRightAlg}/>

        </div>
    );
};

export default class App extends React.Component {

    render() {
        return(
            <div>
                <TopAppBar/>
                <BottomAppBar>
                </BottomAppBar>
            </div>
                 
            
        );
    }
    
}


