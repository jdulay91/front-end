import React, { Component } from 'react'

class AddTechItem extends Component {
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
        // axiosCallgoesHere (post req)
        // set res to addTech(res..)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AddTechItem
