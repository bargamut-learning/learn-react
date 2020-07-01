'use strict';

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">{props.left}</div>
			<div className="SplitPane-right">{props.right}</div>
		</div>
	);
}

function InsertionApp() {
	return (
		<SplitPane
			left={<div className="leftDiv">Left</div>}
			right={<div className="rightDiv">Right</div>}
		/>
	);
}

ReactDOM.render(
	<InsertionApp />,
	document.getElementById(`composition-vs-inheritance-insertion-split`)
);