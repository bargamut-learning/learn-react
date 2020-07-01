'use strict';

const scaleNames = {
	c: `Цельсия`,
	f: `Фаренгейта`,
};

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит.</p>;
	}
	
	return <p>Вода не закипит.</p>;
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			temperature: ``,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			temperature: e.target.value,
		});
	}

	render() {
		const temperature = this.state.temperature;
		const scale = this.props.scale;

		return (
			<fieldset>
				<legend>Введите температуру в градусых {scaleNames[scale]}:</legend>

				<input
					value={temperature}
					onChange={this.handleChange} />
			</fieldset>
		);
	}
}

class Calculator extends React.Component {
	render() {
		return (
			<>
				<TemperatureInput scale="c" />
				<TemperatureInput scale="f" />

				{/* <BoilingVerdict
					celsius={parseFloat(temperature)} /> */}
			</>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById(`lifting-state-up`)
);