import React, { Component } from "react";
import SubCom from "./SubCom";
import PureSubCom from "./PureSubCom";

class LifeCycle extends Component {
	constructor(props) {
		console.log("constructor");
		super(props);
		this.state = {
			name: "dong"
		};
	}
	// 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
	// 此方法无权访问组件实例
	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps");
		return null;
	}
	render() {
		console.log("render");
		let { name } = this.state;
		return (
			<div>
				<div onClick={this.ClickChange}>change: {name}</div>
				<SubCom />
        <PureSubCom />
			</div>
		);
	}
	componentDidMount() {
		console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
    console.log('getSnapshotBeforeUpdate')
    return 'this is getSnapshotBeforeUpdate';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
    console.log('componentDidUpdate',snapshot)
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

	ClickChange = () => {
    console.log('-----------------change name------------------')
		this.setState({
			name: "dong new"
		});
	};
}

export default LifeCycle;
