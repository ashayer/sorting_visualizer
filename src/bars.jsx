import React, { useState, useEffect } from "react";
import {AppBar,Toolbar, FormControl, MenuItem, Select, Box, Button, ButtonGroup, Typography, Grid} from "@material-ui/core";
import './divCreator.css';
import { sortDecider } from "./sortingAlgorithms";
import { setDelay } from "./sortingAlgorithms";
import {ArraySlider,SpeedSlider,Title, useStyles} from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./sortingAlgorithms";
function randomIntegers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const marks = [
    {
        value: 500,
        label: "Slowest",
    },
    {
        value: 250,
        label: "Normal",
    },
    {
        value: 1,
        label: "Fastest",
    },

]

const HistoryMarks = [
    {
        value: 0,
        label: "Start",
    },

]

export default function AppBars(props) {
    const classes = useStyles();
    const [currArray, setArray] = useState([]);
    const [currSize, setSize] = React.useState(10);
    const [currAlg, setAlg] = React.useState("S_SORT");
    const [currSpeed, setSpeed] = React.useState(1);
    const [history, setHistory] = React.useState();


    const [isDisabled, setDisabled] = React.useState({disabled: false});

    const updateDisable = (e,data) => {
        setDisabled(data);
    
    }

    const updateSpeed = (e, data) => {
        setSpeed(data);
        setDelay(data);
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
                tempArray.push(randomIntegers(1,99));
            }
            setArray(tempArray);
        }
        resetArray();

    }, [currSize]);

    function resetArray(){
        
        const tempArray = [];
        for(let i=0;i< currSize; i++){
            tempArray.push(randomIntegers(1,99));
        }
        setArray(tempArray);
    }

    function sortBars(){
        let returnedArrays = sortDecider(currArray, currAlg);

        returnedArrays.then(function(result){
            setHistory(result[1]);

            console.log(history);
            
        })


    }


    function updateHistory(){
        

            
        
    }

    return (
        <div>
            <div>
            <AppBar position="static">
                <Toolbar className={classes.topToolBar}>
                    <Box style= {{width: "25%"}}>
                        <a target="_blank" rel="noreferrer" href='https://github.com/ashayer'><GitHubIcon fontSize= "large" style={{marginRight: "10%", marginLeft: "5%"}}></GitHubIcon></a>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/arandeep/'><LinkedInIcon fontSize= "large"></LinkedInIcon></a>
                    </Box>
                    <Title variant="h2">
                        Sorting Visualizer
                    </Title>
                    <Grid className="speedGrid" align="center">
                        <Typography variant="h5">Speed of sorting</Typography>
                        <SpeedSlider
                        defaultValue = {1}
                        min={1}
                        max={500}
                        valueLabelDisplay="off"
                        value = {currSpeed}
                        onChange = {updateSpeed}
                        marks={marks}
                        />
                    </Grid>

                </Toolbar>
            </AppBar> 
            </div>
            <AppBar className={classes.bottomAppBar}>
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
                    <Grid className="sizeGrid" align="center"> 
                        <Typography variant="h5">
                            Size of array
                        </Typography>
                        <ArraySlider
                            defaultValue = {250}
                            step={5}
                            min={25}
                            max={100}
                            valueLabelDisplay="auto"
                            value = {currSize}
                            onChange = {updateSize}
                            id="arraySlider"
                            disabled={!isDisabled}
                        />
                    </Grid>
                    
                    <ButtonGroup className="buttonGroup" onClick={() => updateDisable()} disabled={!isDisabled}>
                        <Button onClick={() => sortBars()} id="sortButton" variant="contained" className="sortButton">Sort</Button>
                        <Button onClick={() => resetArray()} className="newArrayButton" variant="contained"> New Array</Button>
                    </ButtonGroup>
                </Toolbar>  
            </AppBar>

            <AppBar style={{bottom:0, top: "auto"}}>
                <Toolbar style={{}}>
                    <Button
                        onClick={() => updateHistory()}
                    >
                        TEST
                    </Button>
                </Toolbar>
            </AppBar>
            {/* <AppBar className={classes.lowestAppBar}>
                <Toolbar style={{justifyContent:"space-between"}}>
                    <HistorySlider
                        min={0}
                        step = {1}
                        valueLabelDisplay="auto"
                        marks={HistoryMarks}
                    ></HistorySlider>

                    <Button 
                    variant="contained"
                    onClick={() => updateHistory()}
                    
                    >
                        ASKDJf
                    </Button>
                </Toolbar>
                
            </AppBar> */}
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