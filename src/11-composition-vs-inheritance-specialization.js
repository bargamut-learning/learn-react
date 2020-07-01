'use strict';

// Специализация

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">{props.title}</h1>
			<p className="Dialog-message">{props.message}</p>
		</FancyBorder>
	);
}

function WelcomeDialogApp() {
	return (
		<Dialog
			title="Добро пожаловать"
			message="Спасибо, что посетили наш космический корабль!"
		/>
	);
}

ReactDOM.render(
	<WelcomeDialogApp />,
	document.getElementById(`composition-vs-inheritance-specialization`)
);