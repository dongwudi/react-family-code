import React, { Component } from "react";
import CommonCom from "./CommonCom";

class SubCom extends Component {
	constructor(props) {
		console.log("-sub constructor");
		super(props);
		this.state = {};
	}
	static getDerivedStateFromProps(props, state) {
		console.log("-sub getDerivedStateFromProps");
		return null;
	}
	componentDidMount() {
		console.log("-sub componentDidMount");
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("-sub componentDidUpdate");
	}
	render() {
		console.log("-sub render");
		return (
			<div>
				sub <CommonCom />
			</div>
		);
	}
}

export default SubCom;
