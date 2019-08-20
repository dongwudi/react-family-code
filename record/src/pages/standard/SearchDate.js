import React, { PureComponent } from "react";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { change_start_end, change_timeIndex } from "./store/actionCreators";
import { timeArr } from "@/util";

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

const { RangePicker } = DatePicker;

class SearchDate extends PureComponent {
	render() {
		let {
			timeIndex,
			change_start_end,
			change_timeIndex,
			start,
			end
		} = this.props;
		return (
			<div className="record-search-date">
				<div className="ui-form-item ui-form-item-time">
					<label className="ui-form-label">时间：</label>
					<RangePicker
						className="fn-left"
						locale={locale}
						value={[start, end]}
						format="YYYY-MM-DD"
						onChange={change_start_end}
						disabledDate={this.disabledDateHandle}
					/>
					<ul className="quick-link-date fn-left">
						{timeArr.map((item, index) => (
							<li
								className={timeIndex === index ? "active" : ""}
								key={index.toString()}
								onClick={() => change_timeIndex(index)}
							>
								{item.text}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	disabledDateHandle(value) {
		return value && value >= moment().endOf("day");
	}
}

const mapStateToProps = state => ({
	start: state.getIn(["standard", "start"]),
	end: state.getIn(["standard", "end"]),
	timeIndex: state.getIn(["standard", "timeIndex"])
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ change_start_end, change_timeIndex }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchDate);
