import {
	Box,
	Card,
	Center,
	Divider,
	Flex,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { usePhotoPackageContext } from '../../context/PhotoPackageContext';
import { formatCurrency } from '../../utilities/formatCurrency';

const TAX_VALUE = 8.625;

export const ChallengeThree: React.FC = () => {
	const { totalRevenue } = usePhotoPackageContext();

	const taxOwed = formatCurrency(totalRevenue * 0.08625);
	return (
		<Flex>
			<Box>
				<Text fontSize="4xl">
					Only two things in life are guaranteed...
				</Text>
			</Box>
			<VStack>
				<Card padding={5}>
					<Text fontSize="4xl">{`Total Revenue: ${formatCurrency(
						totalRevenue
					)}`}</Text>
					<Divider />
					<Text fontSize="2xl">{`Tax: ${TAX_VALUE}%`}</Text>
					<Divider />
					<Text fontSize="4xl">{`Tax Owed: ${taxOwed}`}</Text>
				</Card>
			</VStack>
		</Flex>
	);
};
