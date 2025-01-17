import { useState } from 'react';
import { initialFriends } from './data/friends-data';
import FriendsList from './FriendsList.jsx';
import FormAddFriend from './components/FormAddFriend.jsx';
import Button from './components/Button.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';

export default function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	const handleAddFriend = (newFriend) => {
		setFriends(() => [...friends, newFriend]);
		setShowAddFriend(false);
	};
	const handleSelectFriend = (friend) => {
		setSelectedFriend((currentSelectedFriend) => (currentSelectedFriend?.id === friend.id ? null : friend));
		setShowAddFriend(false);
	};

	const handleUpdateBlanceBySplitBill = (value) => {
		setFriends((friends) =>
			friends.map((friend) =>
				friend.id === selectedFriend.id //
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);

		setSelectedFriend(null);
	};

	return (
		<div className="app">
			<aside className="sidebar">
				<FriendsList friends={friends} onSelect={handleSelectFriend} selectedFriend={selectedFriend} />

				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

				<Button onClick={() => setShowAddFriend((show) => !show)}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
			</aside>

			{selectedFriend && <FormSplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleUpdateBlanceBySplitBill} />}
		</div>
	);
}
