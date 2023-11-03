import FriendsList from './FriendsList.jsx';
import FormAddFriend from './components/FormAddFriend.jsx';
import Button from './components/Button.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';

export default function App() {
	return (
		<div className="app">
			<aside className="sidebar">
				<FriendsList />
				<FormAddFriend />
				<Button>Add friend</Button>
			</aside>

			<FormSplitBill />
		</div>
	);
}
