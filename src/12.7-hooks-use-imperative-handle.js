'use strict';

/**
 * В этом примере родительский компонент,
 * который отображает <FancyInput ref={inputRef} />,
 * сможет вызывать inputRef.current.focus().
 */

(() => {
	const { useRef, useImperativeHandle, forwardRef } = React;

	function FancyInput(props, ref) {
		const inputRef = useRef(null);

		// Настраивает значение экземпляра, которое
		// предоставляется родительским компонентам
		// при использовании ref	
		useImperativeHandle(ref, () => ({
			someHandler: () => {
				inputRef.current.focus();
			},
		}));

		return <input ref={inputRef} />;
	}

	// useImperativeHandle должен использоваться с forwardRef
	FancyInput = forwardRef(FancyInput);

	function FancyInputParent() {
		const inputRef = useRef(null);

		const onButtonClick = () => {
			// current указывает на смонтированный элемент `input`
			inputRef.current.someHandler();
		}

		return (
			<div>
				<FancyInput ref={inputRef} />
				
				<button onClick={onButtonClick}>Установить фокус на поле ввода</button>
			</div>
		);
	}

	ReactDOM.render(
		<FancyInputParent />,
		document.getElementById(`hooks-use-imperative-handle`)
	);
})();