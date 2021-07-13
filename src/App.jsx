import React from "react";
import {AppBar,Toolbar} from "@material-ui/core";
import {useStyles} from "./styles";
import DivCreator from "./divCreator";
import './divCreator.css';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {ArraySlider,SpeedSlider, Title} from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from "@material-ui/core";

const marks = [
    {
      value: 1,
      label: 'Fastest',
    },
    {
      value: 5,
    },
    {
      value: 10,

    },
    {
      value: 25,
    },
    {
      value: 50,
      label: "Slow",
      
    },
    {
      value: 100,
      label: "Slower",
    },
    {
      value: 200,
      label: "Slowest",
    },

];

function BottomAppBar() {
    const [currVal, setVal] = React.useState(10);
    const [currLeftAlg, setLeftAlg] = React.useState("I_SORT");
    const [currRightAlg, setRightAlg] = React.useState("B_SORT");
    const [currSpeed, setSpeed] = React.useState(50);
    const updateSpeed = (e, data) => {
        setSpeed(data)
    }
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
            <div className={classes.topToolBarDiv}>
            <AppBar position="sticky" >
            <Toolbar className={classes.topToolBar}>
                <Box style= {{width: "25%"}}>
                    <a target="_blank" rel="noreferrer" href='https://github.com/ashayer'><GitHubIcon fontSize= "large" style={{marginRight: "10%", marginLeft: "5%"}}></GitHubIcon></a>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/arandeep/'><LinkedInIcon fontSize= "large"></LinkedInIcon></a>
                </Box>
                <Title variant="h2">
                Sorting Visualizer
                </Title>
                <div></div>
                <SpeedSlider
                    defaultValue = {25}
                    step={null}
                    min={1}
                    max={225}
                    valueLabelDisplay="off"
                    className="speedSlider"
                    marks={marks}
                    track="inverted"
                    value = {currSpeed}
                    onChange = {updateSpeed}
                    // value = {currVal}
                    // onChange = {updateVal}
                    id="speedSlider"
                />
            </Toolbar>
            </AppBar> 
            </div>
            <AppBar className={classes.bottomAppBar}>
                <Toolbar className={classes.bottomToolBar}>
                    <FormControl className={classes.algSelect} id="leftSelect">
                        <Select 
                            defaultValue= "M_SORT"
                            value = {currLeftAlg}
                            onChange = {updateLeftAlg}
                            id = "leftSelect"
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
                        defaultValue = {10}
                        step={5}
                        min={10}
                        max={300}
                        valueLabelDisplay="auto"
                        value = {currVal}
                        onChange = {updateVal}
                        id="arraySlider"
                    />
                    <FormControl className={classes.algSelect} id="rightSelect">
                        <Select 
                            defaultValue="Q_SORT"
                            value = {currRightAlg}
                            onChange = {updateRightAlg}
                            id = "rightSelect"
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

            <DivCreator sliderVal = {currVal} leftAlgSelect = {currLeftAlg} rightAlgSelect = {currRightAlg} speedVal = {currSpeed}/>

        </div>
    );
};

export default class App extends React.Component {
    render() {
        return(
            <BottomAppBar/>
        );
    }
    
}


