import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import EnglandFlag from "../img/en.svg";
import GermanFlag from "../img/de.svg";
import FrenchFlag from "../img/fr.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    "& .MuiSelect-icon": {
      top: "40px",
      right: "32px",
      color: "#77C2FF",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      backgroundColor: "white",
    },
  },
  flag: {
    height: "30px",
    border: "3px solid #77C2FF",
    borderRadius: "50%",
    padding: "2px",
  },
}));

export const UpperDropdown = ({ handleChangeFirst, firstLangValue }) => {
  // Style.
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={firstLangValue}
        onChange={handleChangeFirst}
        displayEmpty
        IconComponent={ExpandMoreIcon}
        disableUnderline
      >
        <MenuItem value="english">
          <img src={EnglandFlag} className={classes.flag} alt="england flag" />
        </MenuItem>
        <MenuItem value="german">
          <img src={GermanFlag} className={classes.flag} alt="german flag" />
        </MenuItem>
        <MenuItem value="french">
          <img src={FrenchFlag} className={classes.flag} alt="france flag" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export const DownDropdown = ({ handleChangeSecond, secondLangValue }) => {
  // Style.
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={secondLangValue}
        onChange={handleChangeSecond}
        displayEmpty
        IconComponent={ExpandMoreIcon}
        disableUnderline
      >
        <MenuItem value="english">
          <img src={EnglandFlag} className={classes.flag} alt="england flag" />
        </MenuItem>
        <MenuItem value="german">
          <img src={GermanFlag} className={classes.flag} alt="german flag" />
        </MenuItem>
        <MenuItem value="french">
          <img src={FrenchFlag} className={classes.flag} alt="france flag" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
