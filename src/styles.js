import { withStyles } from "@material-ui/styles";
import { makeStyles, Typography } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    bottomAppBar: {
        top:"auto",
        bottom: 0,
    },
    topToolBar:{
        justifyContent:"space-evenly",
    },
    topToolBarDiv:{
        borderBottom: "5px solid white",
    },
    bottomToolBar:{
        justifyContent:"space-evenly",
    },
    algSelect:{
        color:"white",
        backgroundColor:"white",
        borderRadius: 8,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        width: "20%",
    },

  }));

const ArraySlider = withStyles({
    root: {
        color: "#ffa500",
        width: "20%",
    },
    valueLabel:{
        color: "#000000"
    }

})(Slider);

const SpeedSlider = withStyles({
    root: {
        color: "#ffa500",
        width: "25%",
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
    Title,
}
