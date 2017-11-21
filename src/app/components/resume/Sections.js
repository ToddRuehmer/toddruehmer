import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from "../../Store";

class Sections extends React.Component {
	constructor(props) {
		super();
		this.state = {
		    resume: props.resume,
		    tabs: []
	    }
	}
	
	pushSection = ref => {
		if(typeof this.props.resume.tabSet.addSection !== "undefined") {
			this.props.resume.tabSet.addSection(ref);
		}
	}
	
	render() {
		var pushSection = this.pushSection;
		
		if (store.getState().resume.resume.length > 0) {
			var sectionRef = this.props.sectionRef;
			this.state.sections = store.getState().resume.resume.map(function(item, i) {
				if (Array.isArray(item.content)) {
					var content = item.content.map(function(work, i) {
						var projects = work.projects.map(function(project, i) {
							if (i == 0) {
								return (
									<span className="TR-Resume-Project" key={i}>
										<a href={project.link} key={i}>{project.title}</a> 
									</span>
								);
							} else {
								return (
									<span className="TR-Resume-Project" key={i}>
										, <a href={project.link} key={i}>{project.title}</a> 
									</span>
								)
							}
						});
						return (
							<article key={i}>
								<h3>{work.company}</h3>
								<h4>{work.position}</h4>
								<section dangerouslySetInnerHTML={{__html: work.summary}}></section>
								<p>{projects}</p>
							</article>
						);
					});
				} else {
					var content = item.content;
				}
				
				var activeClass = i == 0 ? "TR-ResumeSection_active" : "";
				
				if (Array.isArray(content)) {
					return (
						<article id={"resume-" + item.name} className={"TR-ResumeSection js-TabSection " + activeClass} ref={pushSection} key={i}>
							{content}
						</article>
					);
				} else {
					return (
						<article id={"resume-" + item.name} className={"TR-ResumeSection js-TabSection " + activeClass} ref={pushSection} dangerouslySetInnerHTML={{__html: content}} key={i}></article>
					);
				}
			});
		}
		return (
			<section>
				{this.state.sections}
			</section>
		)
	}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sections);