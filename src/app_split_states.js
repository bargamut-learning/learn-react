'use strict';

const App = () => (
	<div>
		<Clock />
		<Clock />
		<Clock />
	</div>
);

ReactDOM.render(
	<App />,
	document.getElementById(`app-split-states`)
);