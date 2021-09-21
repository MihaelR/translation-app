import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoopIcon from "@material-ui/icons/Loop";

const useStyles = makeStyles((theme) => ({
  dividerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
  },
  divider: {
    width: "45%",
    "& hr": {
      border: "1px solid #DBE1E7",
    },
  },
  dividerLeftSpace: {
    width: "90px",
  },
  langIcon: {
    width: "10%",
    zIndex: "1",
  },
  loopIcon: {
    color: "#77C2FF",
    transform: "rotate(180deg)",
    transition: "1s",
  },
  loopIconActive: {
    color: "#77C2FF",
    transform: "rotate(-180deg)",
    transition: "1s",
  },
}));

export const Divider = ({ toggleButton, toggleLang }) => {
  const classes = useStyles();

  return (
    <div className={classes.dividerContainer}>
      <div className={classes.dividerLeftSpace}></div>
      <div className={classes.divider}>
        {" "}
        <hr />
      </div>
      <div className={classes.langIcon}>
        {" "}
        <LoopIcon
          onClick={toggleLang}
          className={toggleButton ? classes.loopIconActive : classes.loopIcon}
        />{" "}
      </div>
      <div className={classes.divider}>
        <hr />
      </div>
    </div>
  );
};
