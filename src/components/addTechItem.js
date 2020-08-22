import React, { Component } from 'react'

class addTechItem extends Component {
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

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default addTechItem
