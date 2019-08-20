import React, { useEffect } from "react";
import { Table, Icon } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get_dataList } from "./store/actionCreators";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const MyIcon = Icon.createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/font_1360316_4umvbfiwwbr.js" // 在 iconfont.cn 上生成
});

const TableCom = props => {
	let {
		get_dataList,
		start,
		end,
		categoryIndex,
		statusIndex,
		dataList
	} = props;

	const columns = [
		{
			title: "分类",
			dataIndex: "cat",
			key: "cat",
			width: 100,
			render: text => <MyIcon type={text} style={{ fontSize: "24px" }} />
		},
		{
			title: "创建时间",
			dataIndex: "time",
			key: "time",
			width: 130,
			render: text => {
				let time = text.split(" ");
				return (
					<>
						<p>{time[0]}</p>
						<p style={{ color: "#999" }}>{time[1]}</p>
					</>
				);
			}
		},
		{
			title: "名称 | 对方 | 交易号",
			dataIndex: "name",
			key: "name",
			render: text => (
				<Link to={`/detail/${text.num}`} target="_blank">
					<div>{text.title}</div>
					<div style={{ color: "#999" }}>
						{text.othside} | {text.num}
					</div>
				</Link>
			)
		},
		{
			title: "金额",
			dataIndex: "amount",
			key: "amount"
		},
		{
			title: "状态",
			dataIndex: "status",
			key: "status"
		}
	];

	useEffect(() => {
		get_dataList(start, end, categoryIndex, statusIndex);
	}, [get_dataList, categoryIndex, end, start, statusIndex]);

	return (
		<>
			{dataList ? (
				<Table
					columns={columns}
					dataSource={dataList}
					className="limit-width"
				/>
			) : (
				<Spin tips="loading" />
			)}
		</>
	);
};

const mapStateToProps = state => ({
	start: state.getIn(["standard", "start"]),
	end: state.getIn(["standard", "end"]),
	categoryIndex: state.getIn(["standard", "categoryIndex"]),
	statusIndex: state.getIn(["standard", "statusIndex"]),
	dataList: state.getIn(["standard", "dataList"])
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ get_dataList }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TableCom);
