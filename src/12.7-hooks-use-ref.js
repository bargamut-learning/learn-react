'use strict';

(() => {
	const { useRef } = React;

	function TextInputWithFocusButton() {
		const inputEl = useRef(null);

		const onButtonClick = () => {
			// current указывает на смонтированный элемент `input`
			inputEl.current.focus();
		}

		return (
			<>
				<input ref={inputEl} />
				<button onClick={onButtonClick}>Установить фокус на поле ввода</button>
			</>
		);
	}

	ReactDOM.render(
		<TextInputWithFocusButton />,
		document.getElementById(`hooks-use-ref`)
	);
})();