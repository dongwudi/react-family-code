import * as c from "./constants";
import { fromJS } from "immutable";
import { start, end, timeArr, setStart } from "@/util";

const defaultState = fromJS({
	start,
	end,
	timeIndex: 1,
	categoryIndex: 0,
  statusIndex: 0,
  dataList: null
});

export default (state = defaultState, action) => {
	if (action.type === c.CHANGE_START_END) {
		let { start, end } = action;
		return state.merge({
			start,
			end,
			timeIndex: -1
		});
	}

	if (action.type === c.CHANGE_TIMEINDEX) {
		let { num, type } = timeArr[action.num];
		return state.merge({
			timeIndex: action.num,
			start: setStart(num, type),
			end
		});
	}

	if (action.type === c.CHANGE_CAT) {
		return state.set("categoryIndex", action.num);
	}

	if (action.type === c.CHANGE_STATUS) {
		return state.set("statusIndex", action.num);
  }
  
  if (action.type === c.CHANGE_DATALIST) {
		return state.set("dataList", action.data);
  }

	return state;
};
