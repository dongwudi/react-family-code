import React, { Component } from "react";

class SetStateCom extends Component {
  state = {
    name: "dong"
  };

  onChange = e => {
    this.setState({
      name: e.target.value
    });
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

export default SetStateCom;