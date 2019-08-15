import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import("./index.css");

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
	return typeof str === "string";
}

function insertSpace(child, needInserted) {
	if (child == null) {
		return;
	}
	const SPACE = needInserted ? " " : "";
	if (
		typeof child !== "string" &&
		typeof child !== "number" &&
		isString(child.type) &&
		isTwoCNChar(child.props.children)
	) {
		return React.cloneElement(
			child,
			{},
			child.props.children.split("").join(SPACE)
		);
	}

	if (typeof child === "string") {
		if (isTwoCNChar(child)) {
			child = child.split("").join(SPACE);
		}
		return <span>{child}</span>;
	}
	return child;
}

class Button extends Component {
	static defaultProps = {
		htmlType: "button",
		type: "default"
	};

	static propTypes = {
		type: PropTypes.string,
		className: PropTypes.string
	};

	handleClick = e => {
		const { onClick } = this.props;
		if (onClick) {
			onClick(e);
		}
	};

	render() {
		const { type, className, children, htmlType, ...rest } = this.props;
		const kids = insertSpace(children, true);
		const classes = classNames("ant", className, {
			[`ant-${type}`]: type
		});

		const buttonNode = (
			<button
				type={htmlType}
				className={classes}
				onClick={this.handleClick}
				{...rest}
			>
				{kids}
			</button>
		);

		return buttonNode;
	}
}

export default Button;
