import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class AddTechItem extends Component {
	state = {
		techName: '',
        description: '',
        condition:'',
		price: ''
    };
    
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
        e.preventDefault()
		axiosWithAuth()
            .post('/users/1', this.state)
            .then(res=>{
                console.log(res)
                this.props.setTechEquipment([...this.props.techEquipments,res.data])
            })
            this.props.history.push("/techlist")			
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input type='text' name='techName' placeholder='Tech Equipment' value={this.state.techName} onChange={this.onChange} />
				<input type='text' name='description' placeholder='Tech Description' value={this.state.description} onChange={this.onChange} />
                <input type='text' name='condition' placeholder='Tech Condition' value={this.state.condition} onChange={this.onChange} />
				<input type='text' name='price' placeholder='Tech Price' value={this.state.price} onChange={this.onChange} />
				<button>Submit Tech</button>
			</form>
		);
	}
}

export default AddTechItem;
