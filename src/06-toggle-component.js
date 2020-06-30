'use strict';

class Toggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isToggleOn: false,
		};

		// Эта привязка обязательна для работы `this` в коллбэке
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn,
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? `Включено` : `Выключено`}
			</button>
		);
	}
}

ReactDOM.render(
	<Toggle />,
	document.getElementById(`toggler`)
);