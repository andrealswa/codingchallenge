import {
	Tab,
	TabList,
	Tabs,
	Text,
	Spacer,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react';
import { ToggleColorTheme } from '../theme/ToggleColorTheme';
import { ChallengeOne } from '../pages/challengeone/ChallengeOne';
import { ChallengeTwo } from '../pages/challengetwo/ChallengeTwo';
import { ChallengeThree } from '../pages/challengethree/ChallengeThree';

const Navigation: React.FC = () => {
	return (
		<>
			<Tabs colorScheme="teal">
				<TabList>
					<Tab>
						<Text>Challenge One</Text>
					</Tab>
					<Tab>
						<Text>Challenge Two</Text>
					</Tab>
					<Tab>
						<Text>Challenge Three</Text>
					</Tab>
					<Spacer />
					<ToggleColorTheme />
				</TabList>
				<TabPanels>
					<TabPanel>
						<ChallengeOne />
					</TabPanel>
					<TabPanel>
						<ChallengeTwo />
					</TabPanel>
					<TabPanel>
						<ChallengeThree />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};
export default Navigation;
