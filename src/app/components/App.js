import React from "react";
import {render} from 'react-dom';
import {User} from "./User"

import {connect} from "react-redux"

class App extends React.Component
{
	changeName()
	{
		// console.log("In changeName.");
		this.props.setName("Shahjahan");
	}
	render() 
	{
		console.log(this.props.user);
		return(<div>
				<button className="btn btn-success" onClick={this.changeName.bind(this)}>Change Name</button>
				<User username={this.props.user.name}/>
				</div>);
	}
}

const mapStateToProps = (state) => {
	return {
		user : state.userReducer,
		math : state.mathReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch({
				type: "SET_NAME",
				payload: name
			});
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);