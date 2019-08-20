import React, { PureComponent } from "react";
import { catArr, statusArr } from "@/util";
import SearchParamsCom from "./SearchParamsCom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { change_cat, change_status } from "./store/actionCreators";

class SearchParams extends PureComponent {
	render() {
		let { categoryIndex, statusIndex, change_cat, change_status } = this.props;
		return (
			<div className="record-search-params">
				<div className="record-search-cate">
					<SearchParamsCom
						data={catArr}
						type="分类"
						num={categoryIndex}
						change={change_cat}
					/>
				</div>
				<div className="record-search-state">
					<SearchParamsCom
						data={statusArr}
						type="状态"
						num={statusIndex}
						change={change_status}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	categoryIndex: state.getIn(["standard", "categoryIndex"]),
	statusIndex: state.getIn(["standard", "statusIndex"])
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ change_cat, change_status }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchParams);
