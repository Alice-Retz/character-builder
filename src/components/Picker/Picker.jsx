import React from "react";
import "./Picker.css";

export default function Picker({
	head,
	onHeadChange,
	middle,
	onMiddleChange,
	bottom,
	onBottomChange,
	newCatchphrase,
	setCatchphrase,
	handleClick,
}) {
	const headOptions = ["boar", "wolf", "deer", "elephant"];
	const middleOptions = ["blue", "green", "brown"];
	const bottomOptions = ["blue", "green", "brown"];

	return (
		<div className='selector'>
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
				Bottom
				<select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>
					{bottomOptions.map((pic) => (
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
				<p />
				<button type='button' onClick={handleClick}>
					Add catchphrase!
				</button>
			</label>
		</div>
	);
}
