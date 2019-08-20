import * as c from "./constants";
import axios from "@/axios";

export const change_start_end = dates => ({
	type: c.CHANGE_START_END,
	start: dates[0],
	end: dates[1]
});

export const change_timeIndex = num => ({
	type: c.CHANGE_TIMEINDEX,
	num
});

export const change_cat = num => ({
	type: c.CHANGE_CAT,
	num
});

export const change_status = num => ({
	type: c.CHANGE_STATUS,
	num
});

export const get_dataList = (start, end, categoryIndex, statusIndex) => {
	return dispatch => {
		axios
			.get("recordList", {
				params: {
					start,
					end,
					categoryIndex,
					statusIndex
				}
			})
			.then(res => {
				dispatch({
          type: c.CHANGE_DATALIST,
          data: JSON.parse(res).data
        })
			})
			.catch(err => console.log(err));
	};
};
