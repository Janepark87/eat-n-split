import FriendsList from './FriendsList.jsx';
import FormAddFriend from './components/FormAddFriend.jsx';
import Button from './components/Button.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';
import { useState } from 'react';

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);

	return (
		<div className="app">
			<aside className="sidebar">
				<FriendsList />

				{showAddFriend && <FormAddFriend />}

				<Button onClick={() => setShowAddFriend((show) => !show)}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
			</aside>

			<FormSplitBill />
		</div>
	);
}
