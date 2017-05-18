import React from "react";
import render from "react-dom";
import { Address } from "./Address";


export class Root extends React.Component
{
	render()
	{
		return(
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							I am in home
						</div>
					</div>
				</div>
			);
	}
}