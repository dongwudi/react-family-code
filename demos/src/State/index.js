import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

import SetStateCom from "./SetStateCom";
import SetStateCallCom from "./SetStateCallCom";
import SetStatePrev from "./SetStatePrev";
import WordAdder from "./WordAdder";

class State extends Component {
	render() {
		return (
			<Fragment>
				<div className="navs1">
					<Link to="/state/setstate">setstate</Link> <br />
					<Link to="/state/setstatecall">setstate callback</Link> <br />
					<Link to="/state/setstateprev">setstate prevstate</Link> <br />
					<Link to="/state/wordadder">wordadder</Link>
				</div>
				<div className="conts1">
					<Route path="/state/setstate" exact component={SetStateCom} />
					<Route path="/state/setstatecall" exact component={SetStateCallCom} />
					<Route path="/state/setstateprev" exact component={SetStatePrev} />
					<Route path="/state/wordadder" exact component={WordAdder} />
				</div>
			</Fragment>
		);
	}
}

export default State;
