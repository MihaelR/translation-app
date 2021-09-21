import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "white",
    width: "50%",
    minWidth: "600px",
    marginTop: "60px",
    borderRadius: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    paddingTop: "20px",
  },
}));

// Map through array of words, depending on selected language.

export const AvailableWords = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      Available words for translation are:
      <h5>english: animal, cat, family, house</h5>
      <h5>french: animaux, chatte, famille, loger</h5>
      <h5>german: tiere, katze, familie, haus</h5>
    </div>
  );
};
