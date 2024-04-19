import {
	Tab,
	TabList,
	Tabs,
	Text,
	Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ToggleColorTheme } from '../theme/ToggleColorTheme';
import './Navigation.scss';

const Navigation: React.FC = () => {
	return (
		<>
			<Tabs colorScheme="teal">
				<TabList>
					<Tab as={ReactRouterLink} to="/">
						<Text>Challenge One</Text>
					</Tab>
					<Tab as={ReactRouterLink} to="/challengetwo">
						<Text>Challenge Two</Text>
					</Tab>
					<Tab as={ReactRouterLink} to="/challengethree">
						<Text>Challenge Three</Text>
					</Tab>
					<div className="navigation--toggle-color-theme-container">
						<ToggleColorTheme />
					</div>
				</TabList>
			</Tabs>
		</>
	);
};
export default Navigation;
