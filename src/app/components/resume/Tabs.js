import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from "../../Store";

class Tabs extends React.Component {
	constructor(props) {
		super();
		this.state = {
		    resume: props.resume,
		    tabs: []
	    }
	}
	
	render() {
		if (store.getState().resume.resume.length > 0) {
			this.state.tabs = store.getState().resume.resume.map(function(item) {
				return (
					<a href={"#resume-" + item.name}>
						{item.name}
					</a>
				);
			});
		}
		return (
			<nav>
				{this.state.tabs}
			</nav>
		)
	}
}

Location.propTypes = {
	resume: React.PropTypes.object,
	tabs: React.PropTypes.array
}

export default Tabs;