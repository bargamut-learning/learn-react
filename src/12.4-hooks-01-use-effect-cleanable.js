'use strict';

(() => {
	// Mock-данные
	const friendList = [
		{ id: 0, name: `Paul`, isOnline: () => (Math.random() > .5) },
		{ id: 1, name: `Natalia`, isOnline: () => (Math.random() > .5) },
	];
	const ChatAPI = {
		subscribeToFriendStatus: (id, handler) => {
			handler({ isOnline: friendList[id].isOnline() });

			return true;
		},
		unsubscribeFromFriendStatus: (id, handler) => {
			handler({ isOnline: friendList[id].isOnline() });

			return false;
		}
	};

	const { useState, useEffect } = React;

	function FriendStatus(props) {
		const [ isOnline, setIsOnline ] = useState(null);

		useEffect(() => {
			function handleStatusChange(status) {
				setIsOnline(status.isOnline);
			}

			ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

			console.log(`${props.friend.id} useEffect start`);

			// Указываем, как сбросить этот эффект:
			return function cleanup() {
				ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
				
				console.log(`${props.friend.id} useEffect cleanup`);
			};
		});

		if (isOnline === null) return `Загрузка...`;

		return (
			<div>
				{props.friend.name}: {isOnline ? `В сети` : `Не в сети`}
			</div>
		);
	}

	ReactDOM.render(
		<>
			{/* <FriendStatus friend={friendList[0]} /> */}
			{friendList.map((friend) => <FriendStatus key={friend.id} friend={friend} />)}
		</>,
		document.getElementById(`hooks-01-use-effect-cleanable`)
	);
})();