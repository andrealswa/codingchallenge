import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	FormControl,
	HStack,
	Heading,
	Image,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { PhotoTypeEnum } from '../pages/challengetwo/ChallengeTwo';
import { formatCurrency } from '../utilities/formatCurrency';

export interface PhotoPackage {
	id: number;
	name: string;
	price: number;
	image: string;
}

interface PhotoPackageCardProps {
	photoPackage: PhotoPackage;
}

export const PhotoPackageCard = (props: PhotoPackageCardProps) => {
	const quantity = 0;
	return (
		<Card key={props.photoPackage.id} maxW="sm">
			<CardBody>
				<VStack>
					<Image
						className="challenge-two--card-content"
						boxSize="300px"
						src={props.photoPackage.image}
						alt="print example photo"
						borderRadius="lg"
					/>
				</VStack>
				<Stack mt="6" spacing="3">
					<Heading size="md">{props.photoPackage.name}</Heading>
					<Text color="teal.400" fontSize="2xl">
						{formatCurrency(props.photoPackage.price)}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<FormControl>
					<HStack>
						<NumberInput
							name={PhotoTypeEnum.print}
							// value={value}
							// onChange={(e) => setValue(parseInt(e))}
							defaultValue={1}
							min={0}>
							<NumberInputField />
							<NumberInputStepper bg="teal">
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
						<Button
							name={PhotoTypeEnum.print}
							variant="solid"
							colorScheme="teal"
							// onClick={handleAddToCart}
						>
							Add to cart
						</Button>
					</HStack>
				</FormControl>
			</CardFooter>
		</Card>
	);
};
