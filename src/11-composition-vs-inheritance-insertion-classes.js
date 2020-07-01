'use strict';

// Вставки в классах

function DialogBox(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">{props.title}</h1>
			<p className="Dialog-message">{props.message}</p>

			{props.children}
		</FancyBorder>
	);
}

class SignUpDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			login: ``,
		};

		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ login: e.target.value });
	}

	handleSignUp() {
		alert(`Добро пожаловать на борт, ${this.state.login}!`);
	}

	render() {
		return (
			<DialogBox
				title="Программа исследования Марса"
				message="Как к вам обращаться?"
			>
				<input value={this.state.login} onChange={this.handleChange} />
				<button onClick={this.handleSignUp}>
					Запишите меня!
				</button>
			</DialogBox>
		);
	}
}

ReactDOM.render(
	<SignUpDialog />,
	document.getElementById(`composition-vs-inheritance-insertion-classes`)
);