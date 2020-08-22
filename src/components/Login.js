import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosAuth";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("#", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", {});
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("ErrorERRORerror", err);
      });
  };

  render() {
    return <form></form>;
  }
}

export default Login;
