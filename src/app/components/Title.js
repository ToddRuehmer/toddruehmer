import React from "react";

import "../css/components/_title.scss";

import Portrait from "./Portrait";

class Main extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<section className={"TR-Title"}>
				<Portrait />
				<div className={"TR-TitleInner"}>
					<h1>Meet<br /> Todd</h1>
				</div>
			</section>
		)
	}
}

export default Main;