'use strict';

function UserGreeting(props) {
	return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
	return <h1>Войдите, пожалуйста.</h1>;
}

function Greeting(props) {
	const {isLoggedIn} = props;

	if (isLoggedIn) {
		return <UserGreeting />;
	}

	return <GuestGreeting />;
}

ReactDOM.render(
	// Попробуйте заменить на isLoggedIn={true} и посмотрите на эффект.
	<Greeting isLoggedIn={true} />,
	document.getElementById('conditional-rendering-root')
);