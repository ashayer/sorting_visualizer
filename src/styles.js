import { withStyles } from "@material-ui/styles";
import { makeStyles, Typography } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    bottomAppBar: {
        top: "auto",
    },
    topToolBar:{
        justifyContent:"space-evenly",
    },
    bottomToolBar:{
        justifyContent:"space-between",
    },
    lowestAppBar:{
        bottom:0,
        top: "auto",

    },
    algSelect:{
        backgroundColor:"white",
        borderRadius: 8,
        padding: 10,
        width: "25%",
    },

  }));

const ArraySlider = withStyles({
    root: {
        color: "#ffa500",
        width: "100%",
        marginRight: "18vh",
    },
    valueLabel:{
        color: "#000000"
    }

})(Slider);

const SpeedSlider = withStyles({
    root: {
        color: "#ffa500",
        width: "100%",
    },
    valueLabel:{
        color: "#000000"
    },
    markLabel: {
        color: "white",
    }

})(Slider);

const HistorySlider = withStyles({
    root: {
        color: "#ffa500",
        width: "50%",
    },
    valueLabel:{
        color: "#000000"
    },
    markLabel: {
        color: "white",
    }

})(Slider);

const Title = withStyles({
    root: {
        width: "25%",
        marginLeft:"12%",
        marginRight:"12%",
    },

})(Typography);

export {
    useStyles,
    ArraySlider,
    SpeedSlider,
    HistorySlider,
    Title,
}
