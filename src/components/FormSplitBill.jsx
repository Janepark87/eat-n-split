import Button from './Button';

export default function FormSplitBill() {
	return (
		<form className="form-split-bill">
			<h2>Split a bill with X</h2>

			<label htmlFor="billValue">💰 Bill Value</label>
			<input type="text" id="billValue" />

			<label htmlFor="yourExpense">🫵 Your expense</label>
			<input type="text" id="yourExpense" />

			<label htmlFor="friendExpense">👫 X's expense</label>
			<input type="text" id="friendExpense" disabled />

			<label htmlFor="friendExpense">🤑 Who is paying the bill?</label>
			<select id="">
				<option value="user">You</option>
				<option value="friend">X</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
}
