import React, { Component } from "react";

class SetStateCallCom extends Component {
	state = {
		name: "dong"
	};

	onChange = e => {
		this.setState(
			{
				name: e.target.value
			},
			() => console.log(`${this.state.name} ------ 2`)
		);
		console.log(`${this.state.name} ------ 1`);
	};

	render() {
		let { name } = this.state;
		return (
			<div>
				<input value={name} onChange={this.onChange} /> <br />
				name: {name}
			</div>
		);
	}
}

export default SetStateCallCom;
