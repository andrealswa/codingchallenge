import Navigation from './components/Navigation';
import { PhotoPackageProvider } from './context/PhotoPackageContext';

function App() {
	return (
		<PhotoPackageProvider>
			<Navigation />
		</PhotoPackageProvider>
	);
}

export default App;
