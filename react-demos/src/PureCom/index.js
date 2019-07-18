import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// class PureCom extends React.Component {
class PureCom extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      arr: [1,2],
      arr1: [1,2],
      person: {
        name: 'zhangsan'
      }
    }
  }

  changeState = () => {
    this.setState({
      isShow: true
    })
  }

  changeArr = () => {
    let { arr } = this.state;
    arr.push(4);

    this.setState({
      arr
    })
    //不会被重新渲染，指针地址没有变化
  }

  changeArr1 = () => {
    this.setState(({arr1}) => ({
      arr1: arr1.concat([1,2]) //返回一个新数组
    }))
    //会被重新渲染
  }

  // person指针没有改变，父级不渲染 子组件也不重新渲染
  changePerson = () => {
    let { person } = this.state;
    person.name = 'lisi';

    this.setState({
      person
    })
  }

  render() {
    //Component 点击即使isShow没有变化也会触发
    //PureComponent 点击如果isShow没有变化就不会再次触发
    console.log(render)
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <button onClick={this.changeArr}>change-arr</button>
        <button onClick={this.changeArr1}>change-arr1</button>
        <button onClick={this.changePerson}>change-pserson</button>
        <div>{this.state.isShow.toString()}</div>
        <div>{this.state.arr}</div>
        <div>{this.state.arr1}</div>
        <div>{this.state.person.name}</div>
        <hr></hr>
        <SubCom person={this.state.person}/>
      </div>
    )
  }
}

class SubCom extends React.Component {
  render() {
    console.log('SubCom render');
    const { person } = this.props;
    return(
      <div>
        {person.name}
      </div>
    );
  }
}

export default () => render(
  <PureCom />,
  document.getElementById('root')
)