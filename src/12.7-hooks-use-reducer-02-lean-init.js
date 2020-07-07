'use strict';

(() => {
	const { useReducer } = React;

	const initialState = { count: 0 };

	function init(initialCount) {
		return { count: initialCount };
	}

	function reducer(state, action) {
		switch (action.type) {
			case `increment`:
				return {count : state.count + 1};
			case `decrement`:
				return {count : state.count - 1};
			case `reset`:
				return init(action.payload);
			default:
				throw new Error();
		}
	}

	function Counter({initialCount}) {
		const [state, dispatch] = useReducer(reducer, initialCount, init);

		return (
			<>
				Count: {state.count}
				<button onClick={() => dispatch({type: `reset`, payload: initialCount})}>reset</button>
				<button onClick={() => dispatch({type: `decrement`})}>-</button>
				<button onClick={() => dispatch({type: `increment`})}>+</button>
			</>
		);
	}

	ReactDOM.render(
		<Counter initialCount={0}/>,
		document.getElementById(`hooks-use-reducer-02-lean-init`)
	);
})();