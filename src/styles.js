import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    bottomAppBar: {
        top:"auto",
        bottom: 0,
    },
    topToolBar:{
        justifyContent:"space-between",
    },
    topToolBarDiv:{
        borderBottom: "5px solid white",
    },
    bottomToolBar:{
        justifyContent:"space-evenly",
    },
    leftAlg:{
        border: "1px solid white",
        width: "44%",
        height: "85vh",
        float: 'left',
        marginLeft: "5vh",
    },
    rightAlg:{
        border: "1px solid white",
        width: "44%",
        height: "85vh",
        float: "right",
        marginRight: "5vh",
    },
    centerBox:{
        position: "fixed",
        width: "5%",
        height: "10vh",
        zIndex: "100",
        marginLeft: "47.5%",
        marginTop: "15%",
        textAlign: "center",

    },
    centerButtonSort:{
        width: "100%",
        paddingTop: "1vh",
        
    },
  }));

const ArraySlider = withStyles({
    root: {
        color: "#38f0ff",
        width: "15%",

    },
    valueLabel: {
        color: "#000"
    }
})(Slider);

export {
    useStyles,
    ArraySlider
}
