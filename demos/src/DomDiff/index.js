import React, { Component } from "react";
import('./index.css')

function createComponent(name) {
	class _MyNode extends Component {
		constructor(props) {
			super(props);
			console.log(name + " is created.");
		}
		componentDidMount() {
			console.log(name + " did mount.");
		}

		componentWillUnmount() {
			console.log(name + " will unmount.");
		}

		componentDidUpdate() {
			console.log(name + " is updated.");
		}

		render() {
			return (
				<div className={"node " + name} data-name={name}>
					{this.props.children}
				</div>
			);
		}
	}
	return _MyNode;
}

let Root = createComponent("R");
let A = createComponent("A");
let B = createComponent("B");
let C = createComponent("C");
let D = createComponent("D");

class Wrapper extends Component {
	shape1() {
		return (
			<Root>
				<A>
					<B />
					<C />
				</A>
				<D />
			</Root>
		);
	}

	shape2() {
		return (
			<Root>
				<A>
					<B />
				</A>
				<D>
					<C />
				</D>
			</Root>
		);
	}

	shape3() {
		return (
			<Root>
				<A>
					<B>
						<C />
					</B>
				</A>
				<D />
			</Root>
		);
	}

	shape4() {
		return (
			<Root>
				<A>
					<B />
					<D>
						<C />
					</D>
				</A>
			</Root>
		);
	}

	shape5() {
		return (
			<Root>
				<A>
					<B key="B" />
					<C key="C" />
				</A>
			</Root>
		);
	}

	shape6() {
		return (
			<Root>
				<A>
					<C key="C" />
					<B key="B" />
				</A>
			</Root>
		);
	}

	render() {
		if (this[this.props.shape]) {
			return this[this.props.shape]();
		} else {
			return <Root />;
		}
	}
}

class DomDiffCom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shape: "none"
		};
	}
	render() {
		let { shape } = this.state;
		return (
			<div>
				<button onClick={this.renderShape.bind(this, "shape1")}>Shape 1</button>
				<button onClick={this.renderShape.bind(this, "shape2")}>Shape 2</button>
				<button onClick={this.renderShape.bind(this, "shape3")}>Shape 3</button>
				<button onClick={this.renderShape.bind(this, "shape4")}>Shape 4</button>
				<button onClick={this.renderShape.bind(this, "shape5")}>Shape 5</button>
				<button onClick={this.renderShape.bind(this, "shape6")}>Shape 6</button>
				<button onClick={this.renderShape.bind(this, "none")}>Clear</button>
				<Wrapper shape={shape} />
			</div>
		);
	}

	renderShape(shape) {
		this.setState({
			shape
		});
	}
}

export default DomDiffCom;
