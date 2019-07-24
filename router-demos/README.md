## react-router
* 单页应用需要进行页面切换
* 通过url定位页面

```
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hello from './Hello.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/hello">hello</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        
        <div>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
```

## 三种路由实现方式
### URL路径
```
import { BrowserRouter } from 'react-router-dom';

BrowserRouter
```
### hash路由
```
import { HashRouter } from 'react-router-dom';

HashRouter
```
### 内存路由
```
import { HashRouter } from 'react-router';

MemoryRouter
```

## react router api
1. `<Link>` 普通链接，不会触发浏览器刷新
```
import { Link } from 'react-router-dom';
<Link to="/hello">hello</Link>
```
1. `<NavLink>` Link类似，会添加当前选中状态
```
import { NavLink } from 'react-router-dom';
<NavLink to="/hello" activeClassName="active">hello</NavLink>
```
1. `<Prompt>` 提示用户是否离开当前页面
```
import { Prompt } from 'react-router';
<Prompt when={formIsout} message="are you sure you want to leave?">
</Prompt>
```
1. `<Redirect>` 重定向
```
import { Route, Redirect } from 'react-router';
<Route exact path="/" render={() => (
  loginIn ? (
    <Redirect to="/hello" />
  ): (
    <Home />
  )
)} />
```
1. `<Route>` 路由配置核心，路径匹配时，显示对应组件
`exact`精确匹配
```
<Route exact path="/hello" component={Hello}></Route>
<Route path="/about" component={About}></Route>
```
1. `<Switch>` 只显示匹配的第一个路由
```
<Swtich>
  <Route exact path="/hello" component={Hello}></Route>
  <Route path="/hello/dash" component={Dash}></Route>
  <Route path="/about" component={About}></Route>
</Swtich>
```

## url传参
```
<Route path="/about/:id" component={About}></Route>
```

## 获取
```
this.props.match.params
```

## 嵌套路由
```
const SubCategory = ({ match }) => {
  return (
    <Fragment>
      <h1>category {match.params.id}</h1>
      <ul>
        <li>
          <Link to={`/category/${match.params.id}/sub/1`}>subcategory1</Link>
        </li>
        <li>
          <Link to={`/category/${match.params.id}/sub/2`}>subcategory2</Link>
        </li>
        <li>
          <Link to={`/category/${match.params.id}/sub/3`}>subcategory3</Link>
        </li>
      </ul>

      <div>
        <Route path="/category/:id/sub/:subid" component={Category}></Route>
      </div>
    </Fragment>
  )
}
```
