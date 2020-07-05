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

	/**
	 * @description Пользовательский хук
	 * @author Paul "Bargamut" Petrov
	 * @date 2020-07-05
	 * @param {*} friendID
	 * @returns
	 */
	function useFriendStatus(friendID) {
		const [isOnline, setIsOnline] = useState(null);

		function handleStatusChange(status) {
			setIsOnline(status.isOnline);
		}

		useEffect(() => {
			ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

			// Как делать "сброс" после себя
			return () => {
				ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
			};
		});

		return isOnline;
	}

	function FriendStatus(props) {
		const isOnline = useFriendStatus(props.friend.id);

		if (isOnline === null) return `Загрузка...`;

		return isOnline ? `В сети` : `Не в сети`;
	}

	function FriendListItem(props) {
		const isOnline = useFriendStatus(props.friend.id);

		return (
			<li style={{ color: isOnline ? `green` : `black` }}>
				{props.friend.name}
			</li>
		);
	}

	ReactDOM.render(
		<>
			<FriendStatus friend={friendList[0]} />
			<FriendListItem friend={friendList[1]} />
		</>,
		document.getElementById(`hooks-01-simple-custom-hook`)
	);
})();