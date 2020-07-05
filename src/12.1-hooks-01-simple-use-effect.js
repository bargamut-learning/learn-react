'use strict';

(() => {
	const { useState, useEffect } = React;

	function ExampleEffect() {
		const [count, setCount] = useState(0);

		// По принципу componentDidMount и componentDidUpdate:
		useEffect(() => {
			// Обновляем заголовок документа, используя API браузера
			document.title = `Вы нажали ${count} раз`;
		});

		return (
			<div>
				<p>Вы нажали {count} раз</p>
				<button onClick={() => setCount(count + 1)}>
					Нажми на меня
				</button>
			</div>
		);
	}

	ReactDOM.render(
		<ExampleEffect />,
		document.getElementById(`hooks-01-simple-use-effect`)
	);
})();