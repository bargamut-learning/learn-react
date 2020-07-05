'use strict';

(() => {
	const { useState } = React;

	function Example() {
		// Объявление переменной состояния "count" со значением "0"
		const [ count, setCount ] = useState(0);

		return (
			<div>
				<p>Вы кликнули {count} раз</p>

				<button onClick={() => setCount(count + 1)}>
					Нажми на меня
				</button>
			</div>
		);
	}

	ReactDOM.render(
		<Example />,
		document.getElementById(`hooks-01-simple-component`)
	);
})();