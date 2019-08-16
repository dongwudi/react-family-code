import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import State from "./State";
import PropsCom from "./Props";
import LifeCycle from "./LifeCycle";
import EventHandle from './EventHandle';
import ContextCom from './ContextCom';
import ChildrenCom from './ChildrenCom';
import AppRedux from "./Todos/components/App";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="navs">
					<Link to="/state">State</Link> <br/>
					<Link to="/props">Props</Link> <br/>
					<Link to="/lifecycle">lifecycle</Link> <br/>
					<Link to="/event">eventHandle</Link> <br/>
					<Link to="/context">context</Link> <br/>
					<Link to="/children">children</Link> <br/>
					<Link to="/todos">todos</Link> <br/>
				</div>
				<div className="conts">
					<Route path="/state" component={State} />
					<Route path="/props" component={PropsCom} />
					<Route path="/lifecycle" component={LifeCycle} />
					<Route path="/event" component={EventHandle} />
					<Route path="/context" component={ContextCom} />
					<Route path="/children" component={ChildrenCom} />
					<Route path="/todos" component={AppRedux} />
				</div>
			</div>
		</Router>
	);
}

export default App;
