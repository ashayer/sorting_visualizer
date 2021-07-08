import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import Slider from '@material-ui/core/Slider';
import { withStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    mainAppBar: {
      top:"auto",
      bottom: 0,
    },
    textPadding:{
        paddingLeft: "1%",
        paddingRight: "5%",
        
    },
    valueSliderText:{
        width: "15%",
        boxShadow: "none",

    },
  }));

const ArraySlider = withStyles({
    root: {
        color: "#38f0ff"
      },
      active: {},
      valueLabel: {
        color: "#000"
      }
})(Slider);


  export default function App() {
    const classes = useStyles();
    return(
        <>
        <CssBaseline/>
            <AppBar position="fixed" className={classes.mainAppBar}> 
                <Toolbar >
                    <SortIcon ></SortIcon>
                
                    <Typography variant="h4" className={classes.textPadding}>
                        Sorting App
                    </Typography>

                    <AppBar position="relative" className = {classes.valueSliderText} align="center">
                        <Typography variant="h6" ># of items</Typography>
                        <ArraySlider
                            defaultValue = {0}
                            step={5}
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                        />
                    </AppBar>
                
                </Toolbar>
            
                
            </AppBar>
            <main>
                <div>
                </div>
            </main>


        </>
    );
}
