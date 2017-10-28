import React from "react";
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
	
	render() {
		if (store.getState().resume.resume.length > 0) {
			this.state.sections = store.getState().resume.resume.map(function(item, i) {
				if (Array.isArray(item.content)) {
					var content = item.content.map(function(work, i) {
						console.log(work);
						var projects = work.projects.map(function(project, i) {
							if (i == 0) {
								return (
									<span className="TR-Resume-Project">
										<a href={project.link} key={i}>{project.title}</a> 
									</span>
								);
							} else {
								return (
									<span className="TR-Resume-Project">
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
				
				var activeClass = i == 0 ? "TR-ResumeSection_active" : "" ;
				
				if (Array.isArray(content)) {
					return (
						<article id={"resume-" + item.name} className={"TR-ResumeSection " + activeClass} key={i}>
							{content}
						</article>
					);
				} else {
					return (
						<article id={"resume-" + item.name} className={"TR-ResumeSection " + activeClass} dangerouslySetInnerHTML={{__html: content}} key={i}></article>
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

export default Sections;