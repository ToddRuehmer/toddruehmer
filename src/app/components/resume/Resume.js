import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';

import Tabs from "./Tabs";
import Sections from "./Sections";
import TabSwitcher from "../../utility/tabSwitcher";

import { getResume } from "../../actions/resumeActions";

import "../../css/components/resume/_resume.scss";

class Resume extends React.Component {
	constructor(props) {
		super();
		this.state = {
			reveal: false,
			closedClass: "",
			collapsedClass: ""
		};
		this.tabs = [];
		this.sections = [];
		
		props.getResume();

		if(typeof props.location.state !== "undefined") {
			this.state.reveal = props.location.state.reveal	
		}
	}
	
	close(e) {
		if (e) { e.preventDefault(); }
		
		this.props.history.goBack("/");
	}
	
	pushSection = ref => {
		this.props.resume.tabSet.addSection(ref);
	}
	
	componentWillMount() {
		this.props.resume.tabSet = new TabSwitcher(this.refs.resumeTabs,this.tabs,this.sections);
	}
	
	render() {
		return (
			<section className={"TR-Resume " + this.state.closedClass} ref="resume">
				<div className={"TR-ResumeInner " + this.state.collapsedClass} ref="resumeInner">
					<header className="TR-ResumeHeader">
						<h2>Resumé</h2>
						<Link to="/" className="TR-ResumeClose" onClick={this.close.bind(this)}>&times;</Link>
					</header>
					<section className="TR-ResumeMain js-ResumeTabs" ref="resumeTabs">
						<header className="TR-ResumeTabs">
							<Tabs className="js-Tabs" tabRef={this.pushTabs} />
						</header>
						<section className="TR-ResumeContent">
							<Sections tabs={this.props.resume.resume} sectionRef={this.pushSection} />
						</section>
					</section>
				</div>
			</section>
		)
	}
}

Resume.contextTypes = {
  router: React.PropTypes.object
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Resume);