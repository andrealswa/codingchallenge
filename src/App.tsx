import { Route, Routes } from 'react-router-dom';
import { ChallengeOne } from './pages/challengeone/ChallengeOne';
import { ChallengeTwo } from './pages/challengetwo/ChallengeTwo';
import { ChallengeThree } from './pages/challengethree/ChallengeThree';
import Navigation from './components/Navigation';

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<ChallengeOne />} />
				<Route path="/challengetwo" element={<ChallengeTwo />} />
				<Route path="/challengethree" element={<ChallengeThree />} />
			</Routes>
		</>
	);
}

export default App;
