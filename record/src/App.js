import React from "react";
import "./App.scss";
import { HashRouter as Router, Route } from "react-router-dom";
import NavGlobal from "./common/navGlobal";
import NavTop from "./common/navTop";
import { StandardCom, DetailCom } from "./router";

let ava = require('./common/navGlobal/ava-d.jpg');

function App() {
	return (
		<Router>
			<div className="App">
				<NavTop name='dongwudi'/>
				<NavGlobal avatar={ava} />
				<Route path="/" exact component={StandardCom} />
				<Route path="/detail/:id" component={DetailCom} />
			</div>
		</Router>
	);
}

export default App;
