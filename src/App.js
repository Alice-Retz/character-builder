import { useState } from "react";
import "./App.css";
import Character from "./components/Character/Character";
import Display from "./components/Display/Display";
import Picker from "./components/Picker/Picker";

function App() {
	const [head, setHead] = useState("boar");
	const [middle, setMiddle] = useState("blue");
	const [bottom, setBottom] = useState("blue");
	const [newCatchphrase, setNewCatchphrase] = useState("");
	const [catchphrases, setCatchphrase] = useState([]);
	const handleClick = () => {
		setCatchphrase((prevState) => [...prevState, newCatchphrase]);
	};

	return (
		<div className='App'>
			<main className='App-main'>
				<h1>Character Builder</h1>
				<h4>The Modern Paper Doll</h4>
				<section className='builder'>
					<Picker
						head={head}
						onHeadChange={setHead}
						middle={middle}
						onMiddleChange={setMiddle}
						bottom={bottom}
						onBottomChange={setBottom}
						newCatchPhrase={newCatchphrase}
						setCatchphrase={setNewCatchphrase}
						handleClick={handleClick}
					/>
					<Display catchphrases={catchphrases} />
					<Character head={head} middle={middle} bottom={bottom} />
				</section>
			</main>
		</div>
	);
}

export default App;
