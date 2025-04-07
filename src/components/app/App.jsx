import "./App.scss";
import { Hero, About, Services, Works } from "../pages";

function App() {
	return (
		<div className='App'>
			<Hero />
			<About />
			<Services />
			<Works />
		</div>
	);
}

export default App;
