'use strict';

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Войти
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Выйти
		</button>
	);
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);

		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);

		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const {isLoggedIn} = this.state;

		let button = isLoggedIn
			? <LogoutButton onClick={this.handleLogoutClick} />
			: <LoginButton onClick={this.handleLoginClick} />;
		
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />

				{button}
			</div>
		)
	}
}

ReactDOM.render(
	<LoginControl />,
	document.getElementById('conditional-rendering-elements-root')
);