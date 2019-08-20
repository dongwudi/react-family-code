import moment from "moment";

export const start = moment().subtract(1, "months");

export const end = moment();

export const setStart = (num, type) => {
	return moment().subtract(num, type);
};

export const timeArr = [
	{
		text: "今天",
		num: 0,
		type: "days"
	},
	{
		text: "1个月",
		num: 1,
		type: "months"
	},
	{
		text: "3个月",
		num: 3,
		type: "months"
	},
	{
		text: "1年",
		num: 1,
		type: "years"
	}
];

export const catArr = ['全部','购物','线下','理财','转账','还款','缴费','充值','提现','还贷款','手机充值'];

export const statusArr = ['全部','进行中','未付款','等待发货','未确认收货','退款','成功','失败'];