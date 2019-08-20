import React, { PureComponent } from "react";
import "./index.scss";
import SearchDate from "./SearchDate";
import SearchParams from "./SearchParams";
import TableCom from "./TableCom";

class StandardCom extends PureComponent {
	render() {
		return (
			<div className="content">
				<div className="operate-area">
					<div className="area-content limit-width">
						<div className="ui-title">
							<h2 className="fn-left">我的账单</h2>
						</div>
						<SearchDate />
						<SearchParams />
					</div>
				</div>
				<TableCom />
			</div>
		);
	}
}

export default StandardCom;
