import React, { Component, PureComponent } from "react";

class ListOfWords extends PureComponent {
	render() {
		return <div>{this.props.words.join(",")}</div>;
	}
}

class WordAdder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			words: ["marklar"],
			words2: ["marklar"]
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// 这部分代码很糟，而且还有 bug
		const words = this.state.words;
		words.push("marklar");
		this.setState({ words: words });
	}

	handleClick2 = () => {
		// 避免更改你正用于 props 或 state 的值。如果是数组或者对象应该直接返回一个新的数组或对象
		this.setState(state => ({
			words2: state.words2.concat("marklar")
		}));
	};

	render() {
		return (
			<div>
				错误:
				<button onClick={this.handleClick} />
				<br />
				正确：
				<button onClick={this.handleClick2} />
				<ListOfWords words={this.state.words} />
				<ListOfWords words={this.state.words2} />
			</div>
		);
	}
}

export default WordAdder;
