import React, { Component } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
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
    color: "#3d4c8d"
  }
}));

export class FormUserInfo extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.validate();
  };

  render() {
    const { values, handleChange, errors } = this.props;
    const isEnabled =
      values.firstName.length > 0 &&
      values.lastName.length > 0 &&
      values.email.length > 0 &&
      values.msg.length > 0;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <h3>Ponte en Contacto..</h3>
          <p>Aqui puedes solicitar nuestra ayuda o aclarar cualquier duda</p>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id={"standad-basic"}
              label={"Nombre"}
              color={"secondary"}
              fullWidth
              type="text"
              margin="dense"
              required
              helperText={errors.nameError}
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              id={"standad-basic"}
              label={"Apellidos"}
              color={"secondary"}
              fullWidth
              type="text"
              margin="dense"
              required
              helperText={errors.lastNameError}
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              id={"standad-basic"}
              label={"Email"}
              color={"secondary"}
              fullWidth
              type="email"
              required
              margin="dense"
              helperText={errors.emailError}
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <TextField
              id={"standad-multiline-flexible"}
              label={"Mensaje"}
              color={"secondary"}
              multiline
              rows="2"
              fullWidth
              margin="normal"
              required
              helperText={errors.msgError}
              onChange={handleChange("msg")}
              defaultValue={values.msg}
            />
            <br />

            <button
              type="submit"
              className="btn btn-transparent"
              onClick={this.next}
              disabled={!isEnabled}
            >
              Continuar
            </button>
          </form>
          <br />
          <p>
            {!isEnabled
              ? "Deves rellenar todos los campos para continuar"
              : "Confirma tu Informacion"}
          </p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default FormUserInfo;
