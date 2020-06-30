'use strict';

function WarningBanner(props) {
	if (!props.warn) return null;

	return <div className="warning">Предупреждение!</div>;
}

class Page extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showWarnings: true,
		};

		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({
			showWarnings: !state.showWarnings,
		}));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarnings} />

				<button onClick={this.handleToggleClick}>
					{this.state.showWarnings ? `Спрятать` : `Показать`}
				</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Page />,
	document.getElementById('prevent-rendering-root')
);