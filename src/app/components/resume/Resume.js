import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';

import Tabs from "./Tabs";
import Sections from "./Sections";

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
		props.getResume();

		if(typeof props.location.state !== "undefined") {
			this.state.reveal = props.location.state.reveal	
		}
	}
	
	hide() {
		this.collapseContent();
		this.foldUp();
	}
	
	close(e) {
		if (e) { e.preventDefault(); }
		
		Promise.delay(this.collapseContent.bind(this), 1).delay(this.foldUp.bind(this), 200).delay(this.goBack.bind(this), 500);
	}
	
	open(e) {
		if (e) { e.preventDefault(); }
		
		Promise.delay(this.unFold.bind(this), 1).delay(this.expandContent.bind(this), 500)
	}
	
	goBack() {
		this.props.history.goBack();
	}
	
	foldUp() {
		this.setState({ closedClass: "TR-Resume_Closed" });
	}
	
	unFold() {
		this.setState({ closedClass: "" });
	}
	
	collapseContent() {
		this.setState({ collapsedClass: "TR-ResumeInner_Collapsed" });
	}
	
	expandContent() {
		this.setState({ collapsedClass: "" });
	}
	
	revealContent() {
		//this.setState({ closedClass: "" });
	}
	
	componentWillMount() {
		if(this.state.reveal) {
			this.hide();
		}
	}
	
	render() {
		return (
			<section className={"TR-Resume " + this.state.closedClass} ref="resume">
				<div className={"TR-ResumeInner " + this.state.collapsedClass} ref="resumeInner">
					<header className="TR-ResumeHeader">
						<h2>Resumé</h2>
						<Link to="/" className="TR-ResumeClose" onClick={this.close.bind(this)}>&times;</Link>
					</header>
					<section className="TR-ResumeContent">
						<header className="TR-ResumeTabs">
							<Tabs tabs={this.props.resume.resume} />
						</header>
						<section className="TR-ResumeSection">
							<Sections tabs={this.props.resume.resume} />
						</section>
					</section>
				</div>
			</section>
		)
	}
	
	componentDidMount() {
		$('.TR-ResumeInner').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd', function(e) {
			let el = this;
			if(getComputedStyle(el).opacity == 1) {
				
			}
		});
		
		this.open();
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