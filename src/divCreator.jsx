import React from "react";
import "./divCreator.css";
import "./inputs"
import {Button} from "@material-ui/core";
import {ButtonGroup } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {useStyles} from './styles';

class DivCreator extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            array: [],
        };

    }
    
    componentDidMount(){
        this.resetArray();
        
    }

    resetArray() {
        const array = [];
        for(let i=0;i<180;i++){
            array.push(randomIntegers(1,99));
        }
        this.setState({array});
    }

    calculateWidth(){
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
        const {classes} = this.props;

        return (
            <>
                {array.map((value, idx) => (
                    <div className="arrayBars" style={{height: value + "%", width: this.calculateWidth() + "px",}} key ={idx}>
                    </div>
                ))}

            <div className={classes.centerBox}>
                <ButtonGroup
                    orientation="vertical"
                    variant="contained"
                >
                    <Button className={classes.centerButtonSort} >Sort</Button>
                    <Button className={classes.centerButtonNewArray} onClick={() => this.resetArray()}>New Array</Button>
                </ButtonGroup>
            </div>
                    
            </>
        );
    }
};

function randomIntegers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default withStyles(useStyles)(DivCreator);