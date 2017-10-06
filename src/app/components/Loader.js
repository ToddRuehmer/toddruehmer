import React from "react";

import "../css/components/_loader.scss";

class Loader extends React.Component {
	constructor(props) {
		super();
		this.state = {
			images: [],
			loadedCount: 0,
			progressPercent: 0,
			
			loaderStyle: {},
			
			progressBarStyle: {},
			progressBarClass: ""
		};
	}
	
	getImages() {
		this.setState({
			images: document.getElementsByTagName('img')
		}, function() { this.onHaveAssets() });
	}
	
	onHaveAssets() {console.log(this.state.images);
		var self = this;
		
		for(var i=0;i<this.state.images.length;i++) {
			this.state.images[0].addEventListener('load', function() {
				console.log("loaded");
				self.state.loadedCount++;
				self.setState({ progressPercent: self.state.loadedCount / self.state.images.length * 100 });
				self.setState({
					progressBarStyle: {
						...this.state,
						width: self.state.progressPercent + "%"
					}
				});
				if (self.state.progressPercent == 100) {
					setTimeout(function(){
						self.setState({ progressBarClass: "TR-LoaderProgress_Done"});
					}, 500)
					setTimeout(function(){
						self.setState({ loaderStyle: {
							display: "none"
						}});
					}, 1000)
				}
			});
		}
	}
	
	Loader() {
		this.getImages();
	}
	
	render() {
		return (
			<section className="TR-Loader" style={this.state.loaderStyle}>
				<div className={"TR-LoaderProgress " + this.state.progressBarClass} style={this.state.progressBarStyle}></div>
			</section>
		)
	}
	
	componentDidMount() {
		this.Loader();
	}
}

export default Loader;