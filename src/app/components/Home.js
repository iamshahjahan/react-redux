import React from "react";
import render from "react-dom";
import { Header } from "./Header";

import { About } from "./About";
import { Root } from "./Root";
import { Address } from "./Address";

import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Link
} from 'react-router-dom'
export class Home extends React.Component
{
	render()
	{
		return(
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							
						</div>
					</div>

					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<h1>I am in row.</h1>
						</div>
					</div>
				</div>
			);
	}
}