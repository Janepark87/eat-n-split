export default function Friend({ friend }) {
	const { name, balance, image } = friend;

	return (
		<li>
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

			<button className="button">Select</button>
		</li>
	);
}
