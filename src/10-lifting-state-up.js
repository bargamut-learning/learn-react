'use strict';

const scaleNames = {
	c: `Цельсия`,
	f: `Фаренгейта`,
};

function toCelsius(farenheit) {
	return (farenheit - 32) * 5 / 9;
}

function toFarenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);

	if (Number.isNaN(input)) return ``;

	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;

	return rounded.toString();
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит.</p>;
	}
	
	return <p>Вода не закипит.</p>;
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		// Ранее было так: this.setState({temperature: e.target.value});
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const {
			// Используем props вместо const temperature = this.state.temperature;
			temperature,
			scale,
		} = this.props;

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
	constructor(props) {
		super(props);

		this.state = {
			scale: ``,
			temperature: ``,
		};

		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: `c`, temperature });
	}

	handleFarenheitChange(temperature) {
		this.setState({ scale: `f`, temperature });
	}

	render() {
		const {
			scale,
			temperature,
		} = this.state;

		const temperatures =
			{
				CELSIUS: scale === `c` ? temperature : tryConvert(temperature, toCelsius),
				FARENHEIT: scale === `f` ? temperature : tryConvert(temperature, toFarenheit),
			};

		return (
			<>
				<TemperatureInput
					scale="c"
					temperature={temperatures.CELSIUS}
					onTemperatureChange={this.handleCelsiusChange}
				/>

				<TemperatureInput
					scale="f"
					temperature={temperatures.FARENHEIT}
					onTemperatureChange={this.handleFarenheitChange}
				/>

				<BoilingVerdict
					celsius={parseFloat(temperatures.CELSIUS)} />
			</>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById(`lifting-state-up`)
);