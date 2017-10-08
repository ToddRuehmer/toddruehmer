import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "../css/components/_resume.scss";

class Resume extends React.Component {
	constructor(props) {
		super();
		this.state = {
			reveal: false,
			closedClass: ""
		};

		if(typeof props.location.state !== "undefined") {
			this.state.reveal = props.location.state.reveal	
		}
	}
	
	close(e) {
		e.preventDefault();
		console.log(e);
		this.props.history.goBack();
	}
	
	componentWillMount() {
		if(this.state.reveal) {
			console.log("work");
			this.setState({ closedClass: "TR-Resume_Closed" })
		}
	}
	
	render() {
		return (
			<section className={"TR-Resume " + this.state.closedClass} ref="resume">
				<div className={"TR-ResumeInner"}>
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
		setTimeout( function(){ self.setState({ closedClass: "" }), 10});
	}
}

Resume.contextTypes = {
  router: React.PropTypes.object
};

export default Resume;