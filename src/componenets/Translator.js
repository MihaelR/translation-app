import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { words } from "./lang.utils";
import { Divider } from "./Divider";
import { UpperDropdown } from "./Dropdowns";
import { DownDropdown } from "./Dropdowns";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "white",
    width: "50%",
    minWidth: "600px",
    marginTop: "100px",
    height: "300px",
    borderRadius: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  upperContainer: {
    width: "100%",
    display: "flex",
    height: "130px",
  },
  downContainer: {
    width: "100%",
    display: "flex",
    height: "130px",
    position: "relative",
    bottom: "20px",
  },
  input: {
    width: "80%",
    fontSize: "1.5rem",
    marginTop: "10px",
    marginRight: "30px",
    height: "60px",
    border: "none",
    "&::placeholder": {
      color: "#DBE1E7",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

export const Translator = () => {
  // Set values.
  const [inputValue, setInputValue] = useState();
  const [firstLangValue, setFirstLangValue] = useState("english");
  const [secondLangValue, setSecondLangValue] = useState("english");
  const [toggleButton, setToggleButton] = useState(false);

  // Style.
  const classes = useStyles();

  // Handle dropdown languages.
  const handleChangeFirst = (event) => {
    setFirstLangValue(event.target.value);
  };
  const handleChangeSecond = (event) => {
    setSecondLangValue(event.target.value);
  };
  const handleReplaceFirstAndSecondLang = () => {
    setFirstLangValue(secondLangValue);
    setSecondLangValue(firstLangValue);
    setToggleButton(!toggleButton);
  };

  // Map through array of words, depending on selected language.
  const translatedWordArray = words.map((word) => {
    if (word[firstLangValue] === inputValue) {
      return word[secondLangValue];
    }
  });

  // Remove unedfined values from array.
  const translatedWord = translatedWordArray.filter(
    (word) => word !== undefined
  );

  return (
    <div className={classes.mainContainer}>
      <div className={classes.upperContainer}>
        <UpperDropdown
          handleChangeFirst={handleChangeFirst}
          firstLangValue={firstLangValue}
        />
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className={classes.input}
          placeholder={`From ${firstLangValue}`}
        />
      </div>
      {/* divider section */}
      <Divider
        toggleButton={toggleButton}
        toggleLang={handleReplaceFirstAndSecondLang}
      />
      {/* seconddddddd drop */}
      <div className={classes.downContainer}>
        <DownDropdown
          handleChangeSecond={handleChangeSecond}
          secondLangValue={secondLangValue}
        />
        <input
          className={classes.input}
          placeholder={
            translatedWord[0] ? translatedWord : `to ${secondLangValue}`
          }
        />
      </div>
    </div>
  );
};
