import React from "react";
import "./divCreator.css";
import {Button} from "@material-ui/core";
import {ButtonGroup} from "@material-ui/core";
import { sortDecider } from "./sortingAlgs";

function randomIntegers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class DivCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
            array2: [],
        };

    }
    componentDidMount(){
        this.resetArray();   
    }
    componentDidUpdate(prevProps){
        if (this.props.sliderVal !== prevProps.sliderVal){
            this.resetArray();
        }
        if(this.props.speedVal !== prevProps.speedVal){
            this.resetArray();
        }
    }
    resetArray() {
        const array = [];
        const array2 = [];
        for(let i=0;i< this.props.sliderVal; i++){
            array.push(randomIntegers(1,99));
            array2.push(randomIntegers(1,99));
            
        }
        this.setState((state, props) => {
            return {array: array, array2: array2}
        })

        let leftBars = document.getElementsByClassName("arrayBars");
        let rightBars = document.getElementsByClassName("arrayBars2");
        for(let i =0; i<leftBars.length;i++){
            leftBars[i].style.background = "orange";
            rightBars[i].style.background = "orange";
        }
    }
    sortBars(props){ 
        this.disableElements();
        const leftArray = sortDecider(this.state.array, this.props.leftAlgSelect);
        const rightArray = sortDecider(this.state.array2, this.props.rightAlgSelect);

        switch(this.props.leftAlgSelect){
            case "B_SORT":
                this.bubbleSortAnimate(leftArray, "arrayBars");
                break;
            case "M_SORT":
                this.bubbleSortAnimate(leftArray, "arrayBars");
                break;
            case "I_SORT":
                this.insertionSortAnimate(leftArray, "arrayBars");
                break;
            case "S_SORT":
                this.selectionSortAnimate(leftArray, "arrayBars");
                break;
            case "Q_SORT":
                this.bubbleSortAnimate(leftArray, "arrayBars");
                break;
            case "H_SORT":
                this.heapSortAnimate(leftArray, "arrayBars");
                break;
            default:
    
        }

        switch(this.props.rightAlgSelect){
            case "B_SORT":
                this.bubbleSortAnimate(rightArray, "arrayBars2");
                break;
            case "M_SORT":
                this.bubbleSortAnimate(rightArray, "arrayBars2");
                break;
            case "I_SORT":
                this.insertionSortAnimate(rightArray, "arrayBars2");
                break;
            case "S_SORT":
                this.selectionSortAnimate(rightArray, "arrayBars2");
                break;
            case "Q_SORT":
                this.bubbleSortAnimate(rightArray, "arrayBars2");
                break;
            case "H_SORT":
                this.heapSortAnimate(rightArray, "arrayBars2");
                break;
            default:
    
        }
        
    }

    bubbleSortAnimate(arr, side, props){
        let bars = document.getElementsByClassName(side);
        let compares = arr[1];
        for(let i =0; i<compares.length;i++){
            setTimeout(() => {
                let currentCompare = compares[i];
                let tempHeight = bars[currentCompare[0]].clientHeight;
                bars[currentCompare[0]].style.height = bars[currentCompare[1]].clientHeight + "px";
                bars[currentCompare[1]].style.height = tempHeight + "px";
                // if(((i+1) < compares.length) 
                // && compares[i+1][1] < currentCompare[1]){
                //     bars[currentCompare[1]].style.background = "black";
                // }
                this.animateFinish(side, i, arr);
            }, i * this.props.speedVal);
            
        }
        
    }
    insertionSortAnimate(arr, side, props){
        let bars = document.getElementsByClassName(side);
        
        let compares = arr[1];
        for(let i =0; i<compares.length;i++){
            setTimeout(() => {
                let currentCompare = compares[i];
                let tempHeight = bars[currentCompare[0]].clientHeight;
                bars[currentCompare[0]].style.height = bars[currentCompare[1]].clientHeight + "px";
                bars[currentCompare[1]].style.height = tempHeight + "px";
                // if(((i+1) < compares.length) 
                // && compares[i+1][1] < currentCompare[1]){
                //     bars[currentCompare[1]].style.background = "black";
                // }
                this.animateFinish(side, i, arr);
            }, i * this.props.speedVal);
            
        }
        
    }
    selectionSortAnimate(arr, side, props){
        let bars = document.getElementsByClassName(side);
        
        let compares = arr[1];
        for(let i =0; i<compares.length;i++){
            setTimeout(() => {
                let currentCompare = compares[i];
                let tempHeight = bars[currentCompare[0]].clientHeight;
                bars[currentCompare[0]].style.height = bars[currentCompare[1]].clientHeight + "px";
                bars[currentCompare[1]].style.height = tempHeight + "px";
                // if(((i+1) < compares.length) 
                // && compares[i+1][1] < currentCompare[1]){
                //     bars[currentCompare[1]].style.background = "black";
                // }
                this.animateFinish(side, i, arr);
            }, i * this.props.speedVal);
            
        }
        
    }

    heapSortAnimate(arr,side, props){
        let bars = document.getElementsByClassName(side);
        
        let compares = arr[1];
        console.log(arr[0]);
        console.log(compares);
        for(let i =0; i<compares.length;i++){
            setTimeout(() => {
                let currentCompare = compares[i];
                let tempHeight = bars[currentCompare[0]].clientHeight;
                bars[currentCompare[0]].style.height = bars[currentCompare[1]].clientHeight + "px";
                bars[currentCompare[1]].style.height = tempHeight + "px";
                // if(((i+1) < compares.length) 
                // && compares[i+1][1] < currentCompare[1]){
                //     bars[currentCompare[1]].style.background = "black";
                // }
                this.animateFinish(side, i, arr);
            }, i * this.props.speedVal);
            
        }
    }
    disableElements(props){

        document.getElementById("centerBox").style.visibility = "hidden";
        document.getElementById("speedSlider").style.visibility = "hidden";
        document.getElementById("arraySlider").style.visibility = "hidden";
        document.getElementById("leftSelect").style.visibility = "hidden";
        document.getElementById("rightSelect").style.visibility = "hidden";
    }
    enableElements(props){
        document.getElementById("centerBox").style.visibility = "visible";
        document.getElementById("speedSlider").style.visibility = "visible";
        document.getElementById("arraySlider").style.visibility = "visible";
        document.getElementById("leftSelect").style.visibility = "visible";
        document.getElementById("rightSelect").style.visibility = "visible";

    }
    animateFinish(side, i, arr,props){
        this.finished = true;
        if(i===arr[1].length-1){
            let bars = document.getElementsByClassName(side);
            for(let i =0; i<bars.length;i++){
                setTimeout(() => {
                    bars[i].style.background = "green";
                }, i * 5);
                
            }

            if(this.finished){
                this.enableElements();
            }
        }

        
        
    }

    render() {
        const {array} = this.state;
        const {array2} = this.state;

        return (
            <div>
                <div className="array-container-left" >
                        {array.map((value, idx) => ( /* */
                            <div className="arrayBars" key ={idx} style={{height: value + "%"}}>
                            </div>
                        ))}
                </div>
                    <div className="centerBox" id="centerBox">
                    <ButtonGroup size="large" orientation="vertical" >
                        <Button onClick={() => this.sortBars()} id="sortButton" variant="contained">Sort</Button>
                        <Button onClick={() => this.resetArray()} className="newArrayButton" variant="contained"> New Array</Button>
                    </ButtonGroup> 
                    </div>
                <div className="array-container-right">
                    {array2.map((value, idx) => ( /* */
                        <div className="arrayBars2" key ={idx} style={{height: value + "%"}}>
                        </div>
                    ))}
                </div>
                </div>
  
        );
    }
};



