import React, { Component } from "react";
import TestThemeContext from "./TestThemeContext";

class ContextTypeChildCom extends Component {
	render() {
		return <div>{JSON.stringify(this.context)}</div>;
	}
	componentDidMount() {
		console.log(this.context);
	}
}

ContextTypeChildCom.contextType = TestThemeContext;

export default ContextTypeChildCom;
