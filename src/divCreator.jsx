import React from "react";
import "./divCreator.css";
import { sortDecider } from "./sortingAlgorithms";
import { Button, ButtonGroup } from "@material-ui/core";
function randomIntegers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class DivCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: new Array(25),
        };

        this.resetArray = this.resetArray.bind(this);

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
        const tempArray = [];
        for(let i=0;i< this.props.sliderVal; i++){
            tempArray.push(randomIntegers(1,100));

        }
        this.setState((state, props) => {
            
            return {array: tempArray}
            
        })
    }

    sortBars(props){
        sortDecider(this.state.array, this.props.algSelect);
    }

    render() {
        const {array} = this.state;
        return (
            <div>
                <div className="barContainer">
                    {array.map((value, idx) => 
                        (
                            <div className="arrayBars" key ={idx} style={{height: value + "%",}}>
                            </div>
                        ))}
                </div>
                <ButtonGroup size="large">
                        <Button onClick={() => this.sortBars()} id="sortButton" variant="contained">Sort</Button>
                        <Button onClick={() => this.resetArray()} className="newArrayButton" variant="contained"> New Array</Button>
                </ButtonGroup>
            </div>

        );
    }
};



