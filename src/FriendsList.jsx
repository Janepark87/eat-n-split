import Friend from './components/Friend';
import { initialFriends } from './data/friends-data';

export default function FriendsList() {
	return (
		<ul>
			{initialFriends.map((friend) => (
				<Friend key={friend.id} friend={friend} />
			))}
		</ul>
	);
}
