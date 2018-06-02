import React, { Component } from 'react';
import {connect} from 'react-redux';

class CollapseSection extends Component {
	render() {
		return(
			<div className="collapse-section">
				<div className="collapse-section-header">Collapse Section</div>
				<div className="collapse-section-body">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {}
}

export default connect(mapStateToProps)(CollapseSection);