import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "../css/components/_resume.scss";

class Resume extends React.Component {
	constructor(props) {
		super();
		this.state = {
			reveal: false,
			closedClass: "",
			collapsedClass: ""
		};

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
	
	componentWillMount() {
		if(this.state.reveal) {
			this.hide();
		}
	}
	
	render() {
		return (
			<section className={"TR-Resume " + this.state.closedClass} ref="resume">
				<div className={"TR-ResumeInner " + this.state.collapsedClass}>
					<header className="TR-ResumeHeader">
						<h2>Resumé</h2>
						<Link to="/" className="TR-ResumeClose" onClick={this.close.bind(this)}>&times;</Link>
					</header>
					<section className="TR-ResumeContent">
					
					</section>
				</div>
			</section>
		)
	}
	
	componentDidMount() {
		var self = this;
		this.open();
	}
}

Resume.contextTypes = {
  router: React.PropTypes.object
};

export default Resume;