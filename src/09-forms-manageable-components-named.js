'use strict';

class Reservation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isGoing: true,
			numberOfGuests: 2,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.name === `isGoing`
			? target.checked
			: target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		const {
			isGoing,
			numberOfGuests,
		} = this.state;

		alert(`Пойду ли я: ${isGoing} и Количество гостей: ${numberOfGuests}`);

		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Пойду:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>

				<br />

				<label>
					Количество гостей:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>

				<input type="submit" value="Отправить" />
			</form>
		);
	}
}

ReactDOM.render(
	<Reservation />,
	document.getElementById(`forms-manageable-components-named`)
);