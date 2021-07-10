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
    algSelect:{
        color:"white",
        backgroundColor:"white",
        borderRadius: 8,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        width: "20%",
    }
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

export {
    useStyles,
    ArraySlider
}
