import Button from './Button';

export default function AddFriendForm() {
	return (
		<form className="form-add-friend">
			<label htmlFor="friendName">👫 Friend name</label>
			<input type="text" id="friendName" />

			<label htmlFor="ImageURL">📸 Image URL</label>
			<input type="text" id="ImageURL" />

			<Button>Add</Button>
		</form>
	);
}
