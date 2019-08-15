import React, { PureComponent } from "react";
import CommonCom from "./CommonCom";

class SubCom extends PureComponent {
	constructor(props) {
		console.log("---puresub constructor");
		super(props);
		this.state = {};
	}
	static getDerivedStateFromProps(props, state) {
		console.log("---puresub getDerivedStateFromProps");
		return null;
	}
	componentDidMount() {
		console.log("---puresub componentDidMount");
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("---puresub componentDidUpdate");
	}
	render() {
		console.log("---puresub render");
		return (
			<div>
				puresub <CommonCom />
			</div>
		);
	}
}

export default SubCom;
