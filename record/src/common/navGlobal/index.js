import React from "react";
import PropTypes from 'prop-types';
import('./navg.scss');

const NavGlobal = ({ avatar }) => {

	return (
		<div className="nav-g">
			<div className="widget-avatar">
				<div className="avatar">
					<img src={avatar} alt="" />
				</div>
				<div className="mask"></div>
			</div>
		</div>
	);
};

NavGlobal.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default NavGlobal;
