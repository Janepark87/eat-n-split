import Button from './Button';

export default function Friend({ friend, onSelect, selectedFriend }) {
	const { id, name, balance, image } = friend;
	const isSelected = selectedFriend?.id === id;

	return (
		<li className={isSelected ? 'selected' : ''}>
			<img src={image} alt={name} />
			<h3>{name}</h3>

			{balance < 0 && (
				<p className="red">
					You own ${name} ${Math.abs(balance)}
				</p>
			)}
			{balance > 0 && (
				<p className="green">
					${name} owes you ${Math.abs(balance)}
				</p>
			)}
			{balance === 0 && <p>You and {name} are even</p>}

			<Button onClick={() => onSelect(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
		</li>
	);
}
