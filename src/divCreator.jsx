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

        for(let i=0;i< this.props.sliderVal; i++){
            array.push(randomIntegers(1,98));

        }
        this.setState((state, props) => {
            return {array: array}
        })

    }
    sortBars(props){
        const leftArray = sortDecider(this.state.array, this.props.leftAlgSelect);
    }

    render() {
        const {array} = this.state;
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
            </div>

        );
    }
};



