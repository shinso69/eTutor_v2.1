import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles
} from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d4c8d"
    },
    secondary: {
      main: "#db5024"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    },
    input: {
      color: "3d4c8d"
    }
  }
}));

function Form() {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        id={"standad-basic"}
        label={"Nombre"}
        color={"primary"}
        fullWidth
        type="text"
        margin="normal"
        required
        onChange={handleChange}
      />
      <TextField
        id={"standad-basic"}
        label={"Apellidos"}
        color={"primary"}
        fullWidth
        type="text"
        margin="normal"
        required
        onChange={handleChange}
      />
      <TextField
        id={"standad-basic"}
        label={"Email"}
        color={"primary"}
        fullWidth
        type="email"
        required
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        id={"standad-multiline-flexible"}
        label={"Mensaje"}
        color={"secondary"}
        multiline
        rows="4"
        fullWidth
        margin="normal"
        required
        onChange={handleChange}
      />
      <br />
      <button className="btn btn-transparent">Continuar</button>
    </ThemeProvider>
  );
}

export default Form;
