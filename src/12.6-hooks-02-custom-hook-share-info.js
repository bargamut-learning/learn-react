'use strict';

(() => {
	// Mock-данные
	const friendList = [
		{ id: 0, name: `Paul`, isOnline: () => Math.random() > .5 },
		{ id: 1, name: `Natalia`, isOnline: () => Math.random() > .5 },
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

		return isOnline;
	}

	function ChatRecipientPicker() {
		const [ recipientID, setRecipientID ] = useState(1);
		const isRecipientOnline = useFriendStatus(recipientID);

		return (
			<>
				<div style={{color: `white`, backgroundColor: isRecipientOnline ? `green` : `red` }}>status</div>

				<select value={recipientID} onChange={e => setRecipientID(e.target.value)}>
					{friendList.map(friend => <option key={friend.id} value={friend.id}>{friend.name}</option>)}
				</select>
			</>
		);
	}

	ReactDOM.render(
		<ChatRecipientPicker />,
		document.getElementById(`hooks-02-custom-hook-share-info`)
	);
})();