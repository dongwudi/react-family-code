import React from "react";

const SearchParamsCom = ({ data, num, type, change }) => (
	<div className="ui-form-item">
		<label className="ui-form-label">{type}：</label>
		<ul className="ui-form-item-content gray-links">
			{data.map((item, index) => (
				<li
					key={index.toString()}
					className={index === num ? "active" : ""}
					onClick={() => change(index)}
				>
					{item}
				</li>
			))}
		</ul>
	</div>
);

export default SearchParamsCom;
