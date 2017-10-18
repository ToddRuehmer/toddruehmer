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
			this.state.sections = store.getState().resume.resume.map(function(item) {
				return (
					<article id={"resume-" + item.name} dangerouslySetInnerHTML={{__html: item.content}}>
					</article>
				);
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