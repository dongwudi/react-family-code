import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

import UseStateCom from "./UseState";
import UseEffectCom from "./UseEffect";
import UseContextCom from "./UseContext";
import Counter from "./UseReducer";
import TextInputWithFocusButton from './UseRef';

class HookCom extends Component {
	render() {
		return (
			<Fragment>
				<div className="navs1">
					<Link to="/hook/state">useState</Link> <br />
					<Link to="/hook/effect">useEffect</Link> <br />
					<Link to="/hook/context">useContext</Link> <br />
					<Link to="/hook/reducer">useReducer</Link> <br />
					<Link to="/hook/ref">useRef</Link> <br />
				</div>
				<div className="conts1">
					<Route path="/hook/state" exact component={UseStateCom} />
					<Route path="/hook/effect" exact component={UseEffectCom} />
					<Route path="/hook/context" exact component={UseContextCom} />
					<Route
						path="/hook/reducer"
						exact
						render={() => <Counter initialCount={6} />}
					/>
					<Route path="/hook/ref" exact component={TextInputWithFocusButton} />
				</div>
			</Fragment>
		);
	}
}

export default HookCom;
