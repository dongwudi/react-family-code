import React, { Component } from "react";

class DetailCom extends Component {
  render() {
    return (
      <div className="content">
        单号：{this.props.match.params.id}
      </div>
    )
  }
}

export default DetailCom;