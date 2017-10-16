import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getResume } from "../../actions/resumeActions";

class Tabs extends React.Component {
	constructor(props) {
		super();
		this.state = {
		    tabs: {}
	    }
	}
	
	render() {
		return (
			<section>
				
			</section>
		)
	}
	
	componentDidMount(){
	}
}

Location.propTypes = {
	tabs: React.PropTypes.object
}

export default Tabs;