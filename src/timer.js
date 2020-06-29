'use strict';

const Clock = (props) => {
	return (
		<div>
			<h1>Привет, Мир!</h1>
			<h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
};

const tick = () => {
	ReactDOM.render(
		<Clock date={new Date()} />,
		document.getElementById(`root-timer`)
	);
}

setInterval(tick, 1000);