import React from "react";
import {render} from 'react-dom';

export class User extends React.Component
{
	render() 
	{
		console.log(this.props);
		return <div>Name is: {this.props.username} </div>
	}
}