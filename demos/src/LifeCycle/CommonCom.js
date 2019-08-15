import React, { Component } from "react";

class CommonCom extends Component {
	constructor(props) {
		console.log("------com constructor");
		super(props);
		this.state = {};
	}
	static getDerivedStateFromProps(props, state) {
		console.log("------com getDerivedStateFromProps");
		return null;
	}
	componentDidMount() {
		console.log("------com componentDidMount");
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("------com componentDidUpdate");
	}
	render() {
		console.log("------com render");
		return <div>com</div>;
	}
}

export default CommonCom;
