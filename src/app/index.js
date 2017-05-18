import React from "react";
import { render } from "react-dom";
import {createStore,combineReducers } from "redux";
import App from './components/App';

import {Provider} from "react-redux";
const initialStateMath = {
	result : 1,
	lastValues:[]
};

const initialStateUser = {
	name : "Max",
	age:22
};


const mathReducer = (state = initialStateMath,action) => {
	switch(action.type)
	{
		case "ADD":
			state = {
				...state,
				result : state.result + action.payload,
				lastValues:[...state.lastValues,action.payload]
			} 
			break;
		case "SUB":
			state = {
				...state,
				result : state.result - action.payload,
				lastValues:[...state.lastValues,action.payload]
			} 
			break;
	}
	return state;
};

const userReducer = (state = initialStateUser,action) => {
	switch(action.type)
	{
		case "SET_NAME":
			state = {
				...state,
				name:action.payload
			} 
			break;
		case "SET_AGE":
			state = {
				...state,
				age: action.payload
			} 
			break;
	}
	return state;
};

const store = createStore(combineReducers({userReducer,mathReducer}));

store.subscribe(()=>{
	console.log("Store updated:",store.getState());
})
render(<Provider store={store}><App/></Provider>,window.document.getElementById("app"));
