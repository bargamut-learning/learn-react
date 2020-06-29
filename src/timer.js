'use strict';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
		};
	}

	// LIFECYCLE METHODS

	/**
	 * First component rendering in DOM - Mounting
	 * Runs after successful rendering of component in DOM
	 */
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	// Removing element from DOM - Unmounting
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// LIFECYCLE METHODS ENDS

	tick() {
		this.setState({
			date: new Date(),
		});
	}
	
	render() {
		const {date} = this.state;

		return (
			<div>
				<h1>Привет, Мир!</h1>
				<h2>Сейчас {date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById(`root-timer`)
);