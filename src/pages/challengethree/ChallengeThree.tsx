import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Stack,
	StackDivider,
	Text,
	VStack,
} from '@chakra-ui/react';
import { usePhotoPackageContext } from '../../context/PhotoPackageContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import moment from 'moment';

const TAX_VALUE = 8.625;

export const ChallengeThree: React.FC = () => {
	const { totalRevenue } = usePhotoPackageContext();

	const taxOwed = formatCurrency(totalRevenue * 0.08625);
	return (
		<div className="challenge-three--container">
			<Text fontSize="4xl">
				Only two things in life are guaranteed...
			</Text>

			<VStack>
				<Card>
					<CardHeader>
						<Heading size="md">
							<Text>{`Total Revenue for ${moment().format(
								'MMMM'
							)}`}</Text>
						</Heading>
					</CardHeader>

					<CardBody>
						<Stack divider={<StackDivider />} spacing="4">
							<Box>
								<Heading size="xs" textTransform="uppercase">
									Total Revenue:
								</Heading>
								<Text pt="2" fontSize="sm">
									{formatCurrency(totalRevenue)}
								</Text>
							</Box>
							<Box>
								<Heading size="xs" textTransform="uppercase">
									Tax:
								</Heading>
								<Text pt="2" fontSize="sm">
									{`${TAX_VALUE}%`}
								</Text>
							</Box>
							<Box>
								<Heading size="xs" textTransform="uppercase">
									Tax Owed:
								</Heading>
								<Text pt="2" fontSize="sm">
									{taxOwed}
								</Text>
							</Box>
						</Stack>
					</CardBody>
				</Card>
			</VStack>
		</div>
	);
};
