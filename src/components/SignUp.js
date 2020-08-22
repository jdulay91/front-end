import React, { Component } from "react";
// import { axiosWithAuth } from "../utils/axiosAuth";

class SignUp extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      state: {
        ...this.state,
        [e.target.name]: e.target.value,
      },
    });
  };

  // signup = (e) => {
  //   e.preventDefault();
  //   // axiosWithAuth()
  //   //   .put("", this.state)
  //   //   .then((res) => console.log(res))
  //   //   .catch((err) => console.log(err));
  // };
  render() {
    return <form></form>;
  }
}

export default SignUp;
