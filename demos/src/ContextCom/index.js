import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

import ContextTypeCom from "./ContextTypeCom";
import ChildCom from "./ChildCom";
import ThemeContext from "./ThemeContext";

class ContextComProVider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: "pink",
			toggleTheme: this.toggleTheme
		};
	}

	toggleTheme = value => {
		console.log(value);
		this.setState(state => ({
			theme: value
		}));
	};

	render() {
		return (
			<div>
				<ThemeContext.Provider value={this.state}>
					<ChildCom />
				</ThemeContext.Provider>
			</div>
		);
	}
}

class ContextCom extends Component {
	render() {
		return (
			<Fragment>
				<div className="navs1">
					<Link to="/context/provider-consumer">providerConsumer & update</Link>{" "}
					<br />
					<Link to="/context/contexttype">contexttype</Link> <br />
				</div>
				<div className="conts1">
					<Route
						path="/context/provider-consumer"
						exact
						component={ContextComProVider}
					/>
					<Route path="/context/contexttype" exact component={ContextTypeCom} />
				</div>
			</Fragment>
		);
	}
}

export default ContextCom;
