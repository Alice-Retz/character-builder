import { useState } from "react";
import "./App.css";
import Character from "./components/Character/Character";
import Display from "./components/Display/Display";
import Picker from "./components/Picker/Picker";

function App() {
	const [head, setHead] = useState("dog");
	const [middle, setMiddle] = useState("fancy");
	const [newCatchphrase, setNewCatchphrase] = useState("");
	const [catchphrases, setCatchphrase] = useState([]);
	const handleClick = () => {
		setCatchphrase((prevState) => [...prevState, newCatchphrase]);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Character Builder</h1>
				<Picker
					head={head}
					onHeadChange={setHead}
					middle={middle}
					onMiddleChange={setMiddle}
					newCatchPhrase={newCatchphrase}
					setCatchphrase={setNewCatchphrase}
					handleClick={handleClick}
				/>
				<Display catchphrases={catchphrases} />
				<Character head={head} middle={middle} />
			</header>
		</div>
	);
}

export default App;
