import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
	ChakraProvider,
	ColorModeScript,
	theme,
} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);
