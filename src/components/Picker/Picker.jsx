import React from "react";

export default function Picker({
	head,
	onHeadChange,
	middle,
	onMiddleChange,
	newCatchphrase,
	setCatchphrase,
	handleClick,
}) {
	const headOptions = ["boar", "wolf", "deer", "elephant"];
	const middleOptions = ["blue", "green", "brown"];

	return (
		<div>
			<label>
				Head
				<select value={head} onChange={(e) => onHeadChange(e.target.value)}>
					{headOptions.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>
			<label>
				Middle
				<select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>
					{middleOptions.map((pic) => (
						<option key={pic}>{pic}</option>
					))}
				</select>
			</label>

			<label>
				New Catchphrase:
				<input
					type='text'
					value={newCatchphrase}
					onChange={(e) => setCatchphrase(e.target.value)}
				/>
			</label>
			<button type='button' onClick={handleClick}>
				Add catchphrase!
			</button>
		</div>
	);
}
