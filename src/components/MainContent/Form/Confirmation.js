import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

export class Confirmation extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, msg }
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <h3>Confirmación...</h3>
          <p>Asegurate que tu Información es correcta:</p>
          <List>
            <ListItem color="primary">
              <ListItemText primary="Nombre:" secondary={firstName} />
            </ListItem>
            <ListItem color="primary">
              <ListItemText primary="Apellidos:" secondary={lastName} />
            </ListItem>
            <ListItem color="primary">
              <ListItemText primary="Email:" secondary={email} />
            </ListItem>
            <ListItem color="primary">
              <ListItemText primary="Mensaje:" secondary={msg} />
            </ListItem>
          </List>
          <br />
          <button className="btn btn-transparent" onClick={this.next}>
            enviar
          </button>
          <br />
          <button className="btn btn-transparent btn-form" onClick={this.back}>
            atras
          </button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Confirmation;
