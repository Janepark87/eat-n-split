import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState('');
	const [paidByUser, setPaidByUser] = useState('');
	const [whoIsPaying, setWhoIsPaying] = useState('user');

	const paidByFriend = bill ? bill - paidByUser : '';

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!bill || !paidByUser) return;

		onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
	};

	return (
		<form onSubmit={handleSubmit} className="form-split-bill">
			<h2>Split a bill with {selectedFriend.name}</h2>

			<label htmlFor="billValue">💰 Bill Value</label>
			<input type="text" id="billValue" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

			<label htmlFor="yourExpense">🫵 Your expense</label>
			<input
				type="text"
				id="yourExpense"
				value={paidByUser}
				onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
			/>

			<label htmlFor="friendExpense">👫 {selectedFriend.name}'s expense</label>
			<input type="text" id="friendExpense" value={paidByFriend} disabled />

			<label htmlFor="friendExpense">🤑 Who is paying the bill?</label>
			<select id="friendExpense" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
				<option value="user">You</option>
				<option value="friend">{selectedFriend.name}</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
}
