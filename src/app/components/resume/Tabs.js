import React from "react";
import { Provider, connect } from "react-redux";
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
	
	pushTab = ref => {
		this.props.resume.tabSet.addTab(ref);
	}
	
	render() {
		if (store.getState().resume.resume.length > 0) {
			var tabRef = this.props.tabRef,
				tabSet = this.props.resume.tabSet,
				pushTab = this.pushTab;

			this.state.tabs = store.getState().resume.resume.map(function(item, i) {
				return (
					<a href={"#resume-" + item.name} className={"TR-ResumeTab js-Tab"} ref={pushTab} key={i}>
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

const mapStateToProps = (state) => {
	return {
		resume: state.resume
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getResume: () => {
			dispatch(getResume())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);