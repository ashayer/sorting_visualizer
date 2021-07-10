import React from "react";
import "./divCreator.css";
import {Button} from "@material-ui/core";
import {ButtonGroup } from "@material-ui/core";

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
            console.log("idk what this is doing");
            this.resetArray();
        }
    }

    resetArray() {
        const array = [];
        for(let i=0;i< this.props.sliderVal; i++){
            array.push(randomIntegers(1,99));
        }
        this.setState({array});
    }

    calculateWidth(props){
        
        let size = this.state.array.length;
        let finalWidth;

        switch(size){
            case 30:
                finalWidth = 20;
                break;
            case 60:
                finalWidth = 10;
                break;
            case 90:
                finalWidth = 7;
                break;
            case 120:
                finalWidth = 4;
                break;
            case 150:
                finalWidth = 3;
                break;
            case 180:
                finalWidth = 2;
                break;
            default:
                finalWidth = 1;
        }

        return finalWidth;
    }

    render() {
        const {array} = this.state;
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
                        <Button>Sort</Button>
                        <Button onClick={() => this.resetArray()}> New Array</Button>
                    </ButtonGroup> 
                    </div>
                <div className="array-container-right">
                    {array.map((value, idx) => ( /* */
                        <div className="arrayBars" key ={idx} style={{height: value + "%", width: this.calculateWidth() + "px",}}>
                        </div>
                    ))}
                </div>
                </div>
  
        );
    }
};

function randomIntegers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


