import React, { Component } from "react";

class EditTechRentalItem extends Component {
  state={
    tech:{
        dunno: 'dunno what structure you guys want'
    }
}
onChange =(e) => {
    this.setState({
        tech:{
            ...this.state.tech,
            [e.target.name]:e.target.value
        }
    })
}

onSubmit= (e) => {
    e.preventDefault()
    // axiosCallgoesHere (put req)
    // set res to 
}


  render() {
    return(
    <form></form>)
  }
}

export default EditTechRentalItem;
