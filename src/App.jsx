import React, { useState, useEffect } from "react";
import {AppBar,Toolbar, FormControl, MenuItem, Select, Box, Button, ButtonGroup} from "@material-ui/core";
import {useStyles} from "./styles";
import './divCreator.css';
import { sortDecider } from "./sortingAlgorithms";
import {ArraySlider,SpeedSlider, Title} from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function randomIntegers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function AppBars(props) {
    const classes = useStyles();
    const [currArray, setArray] = useState([]);
    const [currSize, setSize] = React.useState(25);
    const [currAlg, setAlg] = React.useState("S_SORT");
    const [currSpeed, setSpeed] = React.useState(25);


    const updateSpeed = (e, data) => {
        setSpeed(data);
    }

    const updateSize = (e, data) => {
        setSize(data);
    }

    const updateAlg = (e) => {
        setAlg(e.target.value);
    }

    useEffect(() => {
        function resetArray(){
            const tempArray = [];
            for(let i=0;i< currSize; i++){
                tempArray.push(randomIntegers(1,100));
            }
            setArray(tempArray);
        }
        resetArray();

    }, [currSize]);

    function resetArray(){
        
        const tempArray = [];
        for(let i=0;i< currSize; i++){
            tempArray.push(randomIntegers(1,100));
        }
        setArray(tempArray);
        console.log(tempArray);
    }

    function sortBars(){
        sortDecider(currArray, currAlg);
    }

    return (
        <div>
            <div>
            <AppBar position="sticky">
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
                        min={25}
                        max={225}
                        valueLabelDisplay="off"
                        className="speedSlider"
                        value = {currSpeed}
                        onChange = {updateSpeed}
                        id="speedSlider"
                    />
                </Toolbar>
            </AppBar> 
            </div>
            <AppBar className={classes.bottomAppBar} id="test">
                <Toolbar className={classes.bottomToolBar}>
                    <FormControl className={classes.algSelect}>
                        <Select 
                            defaultValue= "S_SORT"
                            value = {currAlg}
                            onChange = {updateAlg}
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
                        defaultValue = {25}
                        step={5}
                        min={25}
                        max={100}
                        valueLabelDisplay="auto"
                        value = {currSize}
                        onChange = {updateSize}
                        id="arraySlider"
                    />
                    <ButtonGroup size="large">
                        <Button onClick={() => sortBars()} id="sortButton" variant="contained">Sort</Button>
                        <Button onClick={() => resetArray()} className="newArrayButton" variant="contained"> New Array</Button>
                </ButtonGroup>
                </Toolbar>  
                
            </AppBar>
            <div className="barContainer">
                {currArray.map((value, idx) => 
                    (
                        <div className="arrayBars" key ={idx} style={{height: value + "%",}}>
                        </div>
                    ))}
            </div>

        </div>
    );
};

export default class App extends React.Component {
    render() {
        return(
            <AppBars/>
        );
    }
    
}


