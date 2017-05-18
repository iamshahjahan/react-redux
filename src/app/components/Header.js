/*import React from "react";
import { render } from "react-dom";
import { About } from "./About";
import { Root } from "./Root";
import { Home } from "./Home";
import { Address } from "./Address";


class Header extends React.Component
{
	render()
	{
		
		return (
			<div>abc
				<Router history={browserHistory}>
				<div>
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">
							<a className="navbar-brand" href="#">Basic Application</a>
							<ul className="nav navbar-nav">
								<li className="active">
									<Link to="/home">Home</Link>
								</li>
								<li>
									<Link to="/address">Address</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</div>
					</nav>
					<Route path='/home' component={Root}/>
					<Route path='/address' component={Address} />
					<Route path='/about' component={About} />
				</div>
			</Router>
			</div>
		);
	}
}
*/
import React from "react";
import render from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Link
} from 'react-router-dom';
import { About } from "./About";
import { Root } from "./Root";
import { Address } from "./Address";
import { Login } from "./Login";

export class Header extends React.Component
{
	render()
	{
		return(
				<div className="container-fluid">
					<Router history={browserHistory}>
				<div>
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">
							<a className="navbar-brand" href="#">Basic Application</a>
							<ul className="nav navbar-nav">
								<li className="active">
									<Link to="/home">Home</Link>
								</li>
								<li>
									<Link to="/address">Address</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>

								<li>
									<Link to="/login">Login</Link>
								</li>
							</ul>
						</div>
					</nav>
					<Route path='/home' component={Root}/>
					<Route path='/address' component={Address} />
					<Route path='/login' component={Login} />
				</div>
			</Router>
				</div>
			);
	}
}

