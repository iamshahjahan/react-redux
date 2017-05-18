import React from "react";
import render from "react-dom";


export class Login extends React.Component
{
	constructor() 
	{
		super();
		this.state = 
		{
			user: '',
			password: ''
		};
	}

	login(e)
	{
		e.preventDefault();

		return fetch('http://localhost/login.php', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				user: this.state.user,
				password: this.state.password,
			})
		})
		.then(response => response.json())
		.then( (response) => {
			console.log(response);
      // return response.json();
  })
		.catch( (error) => {
			console.warn('Actions - fetchJobs - recreived error: ', error)
		})
		console.log(this.state.user);
		console.log(this.state.password);
	}


	render()
	{
		return(
			<div>
			<form method="POST" role="form">
			<legend>Login Here</legend>

			<div className="form-group">
			<label htmlFor="">Username</label>
			<input type="text" onChange={ e => this.setState({user:e.target.value})}
			className="form-control" id="" placeholder="Username"/>
			</div>

			<div className="form-group">
			<label htmlFor="">Password</label>
			<input type="password"  onChange={ e => this.setState({password:e.target.value})} className="form-control" id="" placeholder="Password"/>
			</div>

			<button type="submit" onClick={this.login.bind(this)} className="btn btn-primary">Submit</button>
			</form>			
			</div>
			);
	}
}