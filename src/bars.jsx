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

function Bars(props){
    
    return (
        <div className="barContainer">
                {props.currArray.map((value, idx) => 
                    (
                        <div className="arrayBars" key ={idx} style={{height: value + "%",}}>
                        </div>
                    ))}
        </div>
    );
}

export default function AppBars(props) {
    
    const classes = useStyles();
    const [currArray, setArray] = useState([]);
    const [currSize, setSize] = useState(25);
    const [currAlg, setAlg] = useState("M_SORT");
    const [currSpeed, setSpeed] = useState(25);
    const [history, setHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(0);


    const [isDisabled, setDisabled] = useState({disabled: false});

    const [isNotDisabled, setNotDisabled] = useState({isDisabled: false});

    const updateDisable = (e,data) => {
        setDisabled(data);

    }

    const updateNotDisabled = (e,data) => {
        setNotDisabled(data);

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

    const updateHistoryIdx = (e,data) => {
        const slider = document.getElementById("history");
        slider.max = history[0].length-1;
        setHistoryIdx(data);

        testHistory(slider.value);
        
        
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
            let value = 0;

           // console.log(result[0]);
           // console.log(result[1]);
            
            
            
            history.push(result[1]);

            updateNotDisabled();
            value = result[1].length;
   
            
        })

        
    }


    function testHistory(idx){
        let bars = document.getElementsByClassName("arrayBars");
        for(let i =0;i<bars.length;i++){
            bars[i].style.height = history[0][idx][i] + "%";
        }
        
        
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
                            defaultValue = {25}
                            step={5}
                            min={25}
                            max={300}
                            valueLabelDisplay="auto"
                            value = {currSize}
                            onChange = {updateSize}
                            id="arraySlider"
                            disabled={!isDisabled}
                        />
                    </Grid>
                    
                    <ButtonGroup className="buttonGroup" disabled={!isDisabled}>
                        <Button onClick={() => {sortBars(); updateDisable()}} id="sortButton" variant="contained" className="sortButton">Sort</Button>
                        <Button onClick={() => resetArray()} className="newArrayButton" variant="contained"> New Array</Button>
                    </ButtonGroup>
                </Toolbar>  
            </AppBar>
            
            <AppBar className={classes.lowestAppBar}>
                <Toolbar style={{justifyContent:"space-between"}}>
                <Grid align="center" className="historyGrid">
                        <Typography variant="h5">
                            History of sorts
                        </Typography>

                    <input type="range" min="0" max = "24" className="historySlider" id="history"
                        value = {historyIdx}
                        onChange={updateHistoryIdx}
                        disabled={isNotDisabled}
                    
                    ></input>
                </Grid>
                    

                </Toolbar>
                
            </AppBar>
            <Bars
                currArray = {currArray}
            ></Bars>

        </div>
    );
};