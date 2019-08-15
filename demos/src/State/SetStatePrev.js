import React, { Component } from "react";

class SetStateCallCom extends Component {
	state = {
		name: "dong",
		name1: "dong"
	};

	onChange = e => {
		this.setState({
			name: this.state.name + "old1"
		});
		this.setState({
			name: this.state.name + "old2"
		});
	};

	onChange1 = e => {
		this.setState(state => ({
			name1: state.name1 + "old1"
		}));
		this.setState(state => ({
			name1: state.name1 + "old2"
		}));
	};

	render() {
		let { name, name1 } = this.state;
		return (
			<div>
        出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。<br/>
        因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。<br/>
        要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：<br/>
        <hr/>
				使用this.state.name: <br />
				<input value={name} onChange={this.onChange} /> <br />
				name: {name}
				<hr />
				使用函数作为参数的方式：
				<br />
				<input value={name1} onChange={this.onChange1} /> <br />
				name1: {name1}
			</div>
		);
	}
}

export default SetStateCallCom;
