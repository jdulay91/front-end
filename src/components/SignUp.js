import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class SignUp extends Component {
	state = {
		username: '',
		password: '',
		firstname: '',
		lastname: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	signup = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/signup', this.state)
      .catch((err) => console.log(err))
    this.history.push('/techlist')
	};
	render() {
		return (
			<form onSubmit={this.signup}>
				<input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} />
				<input type='text' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
				<input type='text' name='firstname' placeholder='firstname' value={this.state.firstname} onChange={this.handleChange} />
				<input type='text' name='lastname' placeholder='lastname' value={this.state.lastname} onChange={this.handleChange} />
				<button>Sign Up</button>
			</form>
		);
	}
}

export default SignUp;
