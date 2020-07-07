'use strict';

(() => {
	// Mock-данные
	const friendList = [
		{ id: 0, name: `Paul`, isOnline: () => true },
		{ id: 1, name: `Natalia`, isOnline: () => true },
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
	
	const { useState, useEffect, useDebugValue } = React;

	function useFriendStatus(friendID) {
		const [ isOnline, setIsOnline ] = useState(null);

		useEffect(() => {
			function handleStatusChange(status) {
				setIsOnline(status.isOnline);
			}

			ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

			return () => {
				ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);	
			};
		});

		// Показывать ярлык в DevTools рядом с этим хуком
		// например, "Статус друга: В сети"
		useDebugValue(isOnline ? `В сети` : `не в сети`);

		return isOnline;
	}

	function FriendStatus(props) {
		const isOnline = useFriendStatus(props.friend.id);

		if (isOnline === null) return `Загрузка...`;

		return (
			<div>
				{props.friend.name}: {isOnline ? `В сети` : `Не в сети`}
			</div>
		);
	}

	function FriendListItem(props) {
		const isOnline = useFriendStatus(props.friend.id);

		return (
			<li style={{color: isOnline ? `green` : `black`}}>
				{props.friend.name}
			</li>
		)
	}

	ReactDOM.render(
		<>
			<h3>FriendStatus</h3>
			{friendList.map((friend) => <FriendStatus key={friend.id} friend={friend} />)}

			<h3>FriendListItem</h3>
			{friendList.map((friend) => <FriendListItem key={friend.id} friend={friend} />)}
		</>,
		document.getElementById(`hooks-use-debug-value`)
	);
})();