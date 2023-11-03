import FriendsList from './FriendsList.jsx';
import FormAddFriend from './components/FormAddFriend.jsx';
import Button from './components/Button.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';
import { useState } from 'react';
import { initialFriends } from './data/friends-data';

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);

	const handleAddFriend = (newFriend) => {
		setFriends(() => [...friends, newFriend]);
		setShowAddFriend(false);
	};

	return (
		<div className="app">
			<aside className="sidebar">
				<FriendsList friends={friends} />

				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

				<Button onClick={() => setShowAddFriend((show) => !show)}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
			</aside>

			<FormSplitBill />
		</div>
	);
}
