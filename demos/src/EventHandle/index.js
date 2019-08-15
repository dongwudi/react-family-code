import React, { PureComponent } from "react";

class EventHandle extends PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (
			<div>
				<a href="https://www.baidu.com/" onClick={this.handleClick}>
					a标签
				</a>
				<div onClick={this.publicFieldsHandle}>publicFieldsHandle</div>
				<div onClick={e => {this.arrowHandle()}}>arrow callback</div>

        <button onClick={(e) => this.deleteRow(5, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, 6)}>Delete Row</button>
			</div>
		);
	}

	handleClick(e) {
		e.preventDefault();
	}

	publicFieldsHandle = () => {
		console.log(this);
	};

	arrowHandle() {
		console.log(this);
  }
  
  deleteRow(id) {
    console.log(id)
  }
}

export default EventHandle;
