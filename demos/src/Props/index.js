import React, { Component } from "react";

const NameCom = props => <div>{props.na}</div>;

class PropsCom extends Component {
	state = {
		name: "dong"
	};
	render() {
		let { name } = this.state;
		return (
			<div>
				<button
					onClick={() => this.setState(state => ({ name: state.name + 1 }))}
				>
					change name: {name}
				</button>
				<NameCom na={name} />
			</div>
		);
	}
}

export default PropsCom;
