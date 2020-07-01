'use strict';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит.</p>;
	}
	
	return <p>Вода не закипит.</p>;
}

class Calculator extends React.Component {
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

		return (
			<fieldset>
				<legend>Введите температуру в градусых Цельсия:</legend>

				<input
					value={temperature}
					onChange={this.handleChange} />

				<BoilingVerdict
					celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById(`lifting-state-up`)
);