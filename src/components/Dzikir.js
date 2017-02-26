import React from "react";

export default class Dzikir extends React.Component {
	constructor() {
		super();

		this.state = {count: 0};
	}

	handleCount(e) {
		this.setState({ count: this.state.count += 1 });

		e.preventDefault();
	}

	handleReset(e) {
		this.setState({ count: 0 });

		e.preventDefault();
	}

	render() {
		return (
			<div className="row card">
				<div className="col-md-4 col-md-offset-4">
					<h1>{this.state.count}</h1>
					<div className="col-md-3 col-xs-2 col-xs-offset-2 col-md-offset-2">
						<button className="btn btn-primary" onClick={this.handleCount.bind(this)}><b>Count</b></button>
					</div>
					<div className="col-md-3 col-xs-2 col-xs-offset-2 col-md-offset-2">
						<button className="btn btn-default" onClick={this.handleReset.bind(this)}><b>Reset</b></button>
					</div>
				</div>
			</div>
		);
	}
}