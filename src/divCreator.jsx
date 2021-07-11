import React from "react";
import "./divCreator.css";
import {Button} from "@material-ui/core";
import {ButtonGroup } from "@material-ui/core";
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
    }
    
    sortBars(props){ 
        const leftArray = sortDecider(this.state.array, this.props.leftAlgSelect);
        const rightArray = sortDecider(this.state.array2, this.props.rightAlgSelect);

        
        this.animateBarsLeft(leftArray);
        this.animateBarsRight(rightArray);

        
        
    }

    animateBarsLeft(leftArray){
        let bars = document.getElementsByClassName("arrayBars");

        let compares = leftArray[1];

        for(let i =0; i<compares.length;i++){
            //console.log(bars[i]);
            setTimeout(() => {
                let currentCompare = compares[i];
                
                console.log(bars[currentCompare[0]].clientHeight)
                console.log(bars[currentCompare[1]].clientHeight)

                let tempHeight = bars[currentCompare[0]].clientHeight;

                bars[currentCompare[0]].style.height = bars[currentCompare[1]].clientHeight + "px";
                bars[currentCompare[1]].style.height = tempHeight + "px";
                

                console.log(bars[currentCompare[0]].clientHeight)
                console.log(bars[currentCompare[1]].clientHeight)

                bars[currentCompare[0]].style.background = "#000000";
                bars[currentCompare[0]].style.background = "orange";
                bars[currentCompare[1]].style.background = "#000000";
                bars[currentCompare[1]].style.background = "orange";
            }, i * 20);
            
        }
    }

    animateBarsRight(rightArray){
        let bars = document.getElementsByClassName("arrayBars2");

        let compares = rightArray[1];

        for(let i =0; i<compares.length;i++){
            //console.log(bars[i]);
            setTimeout(() => {
                let currentCompare = compares[i];
                
                console.log(bars[currentCompare[0]].clientHeight)
                console.log(bars[currentCompare[1]].clientHeight)

                let tempHeight = bars[currentCompare[0]].clientHeight;

                bars[currentCompare[0]].style.height = bars[currentCompare[1]].clientHeight + "px";
                bars[currentCompare[1]].style.height = tempHeight + "px";
                

                console.log(bars[currentCompare[0]].clientHeight)
                console.log(bars[currentCompare[1]].clientHeight)

                bars[currentCompare[0]].style.background = "#000000";
                bars[currentCompare[0]].style.background = "orange";
                bars[currentCompare[1]].style.background = "#000000";
                bars[currentCompare[1]].style.background = "orange";
            }, i * 20);
            
        }
    }

    render() {
        const {array} = this.state;
        const {array2} = this.state;

        return (
            <div>
                <div className="array-container-left">
                        {array.map((value, idx) => ( /* */
                            <div className="arrayBars" key ={idx} style={{height: value + "%"}}>
                            </div>
                        ))}
                </div>
                    <div className="centerBox">
                    <ButtonGroup orientation="vertical">
                        <Button onClick={() => this.sortBars()}>Sort</Button>
                        <Button onClick={() => this.resetArray()}> New Array</Button>
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



