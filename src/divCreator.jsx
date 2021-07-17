// import React, { useState, useEffect } from "react";
// import "./divCreator.css";
// import { sortDecider } from "./sortingAlgorithms";
// import { AppBar, Button, ButtonGroup } from "@material-ui/core";
// import {useStyles} from "./styles";
// import reactDom from "react-dom";


// function randomIntegers(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// export function DivCreate(props){
//     const classes = useStyles();

//     const [currArray, setArray] = useState([]);


//     useEffect(() => {
//         function resetArray(){
//             const tempArray = [];
//             for(let i=0;i< props.sliderVal; i++){
//                 tempArray.push(randomIntegers(1,100));
//             }
//             setArray(tempArray);
//         }
//         resetArray();

//     }, [props.sliderVal]);

//     function resetArray(){
//         const tempArray = [];
//         for(let i=0;i< props.sliderVal; i++){
//             tempArray.push(randomIntegers(1,100));
//         }
//         setArray(tempArray);
//     }

//     function sortBars(){
//         sortDecider(currArray, props.algSelect);
//     }

//     return (

//         <div>
            
                
//         </div>

//     );

// };

// // export default class DivCreator extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             array: new Array(25),
// //         };

// //

// //     }
// //     componentDidMount(){
// //         this.resetArray();
// //     }
// //     componentDidUpdate(prevProps){
// //         if (this.props.sliderVal !== prevProps.sliderVal){
// //             this.resetArray();
// //         }
// //     }

// //     resetArray() {
// //         const tempArray = [];
// //         for(let i=0;i< this.props.sliderVal; i++){
// //             tempArray.push(randomIntegers(1,100));

// //         }
// //         this.setState((state, props) => {
            
// //             return {array: tempArray}
            
// //         })
// //     }

// //     sortBars(props){
// //         sortDecider(this.state.array, this.props.algSelect);
// //     }

// //     render() {
// //         const {array} = this.state;
// //         return (
// //             <div>
// //                 <div className="barContainer">
// //                     {array.map((value, idx) => 
// //                         (
// //                             <div className="arrayBars" key ={idx} style={{height: value + "%",}}>
// //                             </div>
// //                         ))}
// //                 </div>
// //                 <ButtonGroup size="large">
// //                         <Button onClick={() => this.sortBars()} id="sortButton" variant="contained">Sort</Button>
// //                         <Button onClick={() => this.resetArray()} className="newArrayButton" variant="contained"> New Array</Button>
// //                 </ButtonGroup>
// //             </div>

// //         );
// //     }
// // };



