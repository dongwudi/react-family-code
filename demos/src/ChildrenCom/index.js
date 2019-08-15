import React, { Component } from 'react';
import Button from './Button';

class ChildrenCom extends Component {
  render() {
    return (
      <div>
        <Button type="primary">添加</Button>
        <Button onClick={(e) => {alert(e)}}>删除</Button>
      </div>
    )
  }
}

export default ChildrenCom;