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
			var tabRef = this.props.tabRef;

			this.state.tabs = store.getState().resume.resume.map(function(item, i) {
				
				var activeClass = i == 0 ? "TR-ResumeTab_active" : "";				
				return (
					<a href={"#resume-" + item.name} className={"TR-ResumeTab js-Tab " + activeClass} ref={tabRef} key={i}>
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