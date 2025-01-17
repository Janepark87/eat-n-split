import { useState } from 'react';
import Button from './Button';

export default function AddFriendForm({ onAddFriend }) {
	const [name, setName] = useState('');
	const [imgSrc, setImgSrc] = useState('https://i.pravatar.cc/48');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !imgSrc) return;

		const id = crypto.randomUUID();
		const newFriend = {
			id,
			name,
			image: `${imgSrc}?=${id}`,
			balance: 0,
		};

		onAddFriend(newFriend);
		setName('');
		setImgSrc('https://i.pravatar.cc/48');
	};

	return (
		<form onSubmit={handleSubmit} className="form-add-friend">
			<label htmlFor="friendName">👫 Friend name</label>
			<input type="text" id="friendName" value={name} onChange={(e) => setName(e.target.value)} />

			<label htmlFor="ImageURL">📸 Image URL</label>
			<input type="text" id="ImageURL" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} />

			<Button>Add</Button>
		</form>
	);
}
