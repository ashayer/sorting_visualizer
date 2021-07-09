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
