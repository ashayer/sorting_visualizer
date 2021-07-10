import React from "react";
import {AppBar,Button,Toolbar,Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {ButtonGroup } from "@material-ui/core";
import DivCreator from "./divCreator";
import './divCreator.css';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {ArraySlider } from './styles';



export default function App() {


    const classes = useStyles();

    function TopAppBar(){
        return (
        <div className={classes.topToolBarDiv}>
            <AppBar position="sticky" >
            <Toolbar className={classes.topToolBar}>
                  <Typography variant="subtitle1" style={{paddingRight: "10vh",}}>
                    Test
                    Test
                  </Typography>
                  <Typography variant="h2">
                    Sorting App
                  </Typography>
                  <ButtonGroup variant="contained">
                    <Button>Fast</Button>
                    <Button>Normal</Button>
                    <Button>Slow</Button>
                  </ButtonGroup>
            </Toolbar>
            </AppBar> 
        </div>
            
        );
    }

    

    return(
        <div>
            <TopAppBar/>
            <DivCreator/>
            {/* <BottomAppBar/> */}
            <SizeSlider/>
        </div>
             
        
        
    );
}

function BottomAppBar(props){
    const classes = useStyles();

    return(
        <AppBar className={classes.bottomAppBar}>
            <Toolbar className={classes.bottomToolBar}>
                <FormControl className={classes.algSelect}>
                    <Select defaultValue={"M_SORT"}>
                        <MenuItem value = {"M_SORT"}>Merge Sort</MenuItem>
                        <MenuItem value = {"I_SORT"}>Insertion Sort</MenuItem>
                        <MenuItem value = {"S_SORT"}>Selection Sort</MenuItem>
                        <MenuItem value = {"Q_SORT"}>Quick Sort</MenuItem>
                        <MenuItem value = {"B_SORT"}>Bubble Sort</MenuItem>
                        <MenuItem value = {"H_SORT"}>Heap Sort</MenuItem>
                    </Select>
                </FormControl>
                <ArraySlider
                    defaultValue = {30}
                    step={5}
                    min={30}
                    max={300}
                    valueLabelDisplay="auto"
                    value={props.percentage}
                />
                <FormControl className={classes.algSelect}>
                    <Select defaultValue={"Q_SORT"}>
                        <MenuItem value = {"M_SORT"}>Merge Sort</MenuItem>
                        <MenuItem value = {"I_SORT"}>Insertion Sort</MenuItem>
                        <MenuItem value = {"S_SORT"}>Selection Sort</MenuItem>
                        <MenuItem value = {"Q_SORT"}>Quick Sort</MenuItem>
                        <MenuItem value = {"B_SORT"}>Bubble Sort</MenuItem>
                        <MenuItem value = {"H_SORT"}>Heap Sort</MenuItem>
                    </Select>
                </FormControl>
                
            </Toolbar>
        </AppBar>
    )
}

class SizeSlider extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            percentage: 30,
        }


    }

    render(){
        return (
            <BottomAppBar

            value = {this.props.percentage}
            onChange = {this.handleChange}
            >


            </BottomAppBar>
        );
    }

    handleChange(e) {
        this.setState({percentage: e.target.value})
    }
}