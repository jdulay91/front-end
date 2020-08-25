import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export class Login extends Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};
login = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/login', this.state.credentials)
			.then((res) => {
				// console.log(res.data.user.id)      
				localStorage.setItem('token', res.data.token);
				this.props.history.push('/techlist');
			})
			.catch((err) => {
				console.log('ErrorERRORerror', err);
			});
	};



	render() {
		return (
		<form onSubmit={this.login}>
        <input 
        type='text' 
        name='username' 
        placeholder='username' 
        value={this.state.credentials.username} 
        onChange={this.handleChange} 
        />
        <input 
        type='text' 
        name='password' 
        placeholder='Password' 
        value={this.state.credentials.password} 
        onChange={this.handleChange} 
        />
        <button>Log IN</button>
			</form>
		);
	}
}

export default Login;
