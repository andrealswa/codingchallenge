import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	FormControl,
	HStack,
	Heading,
	Icon,
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
import print from '../../images/pexels-george-milton-7015070.jpg';
import strip from '../../images/pexels-cottonbro-studio-4551839.jpg';
import panorama from '../../images/pexels-lisa-fotios-3586765.jpg';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './ChallengeTwo.scss';

export enum PhotoTypeEnum {
	print = 'print',
	panorama = 'panorama',
	strip = 'strip',
}

interface PhotoData {
	quantity: number;
	name: PhotoTypeEnum | null;
}

export const ChallengeTwo: React.FC = () => {
	const [value, setValue] = useState(1);
	const [isWinner, setIsWinner] = useState(false);
	const [cart, setCart] = useState<PhotoData[]>([]);

	const handleAddToCart = () => {
		// setCart([, ...cart]);
	};

	const handleChange = (value: number) => setValue(value);

	return (
		<div className="challenge-two--container">
			<div className="challenge-two--card-container">
				<Text fontSize="4xl">I'm feeling lucky!</Text>
				<HStack>
					<Icon boxSize={8} as={FaShoppingCart} />
					<Text>{cart.length} item(s)</Text>
				</HStack>
			</div>
			<div className="challenge-two--card-container">
				<Card maxW="sm">
					<CardBody>
						<VStack>
							<Image
								className="challenge-two--card-content"
								boxSize="300px"
								src={print}
								alt="print example photo"
								borderRadius="lg"
							/>
						</VStack>
						<Stack mt="6" spacing="3">
							<Heading size="md">Print (4x6 photo)</Heading>
							<Text color="teal.400" fontSize="2xl">
								$5
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<FormControl>
							<HStack>
								<NumberInput
									name={PhotoTypeEnum.print}
									value={value}
									onChange={(e) => setValue(parseInt(e))}
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
									onClick={handleAddToCart}>
									Add to cart
								</Button>
							</HStack>
						</FormControl>
					</CardFooter>
				</Card>
				<Card maxW="sm">
					<CardBody>
						<VStack>
							<Image
								className="challenge-two--card-content"
								boxSize="300px"
								src={panorama}
								alt="panorama example photo"
								borderRadius="lg"
							/>
						</VStack>
						<Stack mt="6" spacing="3">
							<Heading size="md">Panorama (6x12 photo)</Heading>
							<Text color="teal.400" fontSize="2xl">
								$7
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<FormControl>
							<HStack>
								<NumberInput
									name={PhotoTypeEnum.panorama}
									value={value}
									onChange={(e) => setValue(parseInt(e))}
									defaultValue={1}
									min={0}>
									<NumberInputField />
									<NumberInputStepper bg="teal">
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								<Button
									name={PhotoTypeEnum.panorama}
									variant="solid"
									colorScheme="teal"
									onClick={handleAddToCart}>
									Add to cart
								</Button>
							</HStack>
						</FormControl>
					</CardFooter>
				</Card>
				<Card maxW="sm">
					<CardBody>
						<VStack>
							<Image
								className="challenge-two--card-content"
								boxSize="300px"
								src={strip}
								alt="strip example photo"
								borderRadius="lg"
							/>
						</VStack>
						<Stack mt="6" spacing="3">
							<Heading size="md">
								Strips (two 2x6 photo strips)
							</Heading>
							<Text color="teal.400" fontSize="2xl">
								$5
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<FormControl>
							<HStack>
								<NumberInput
									name={PhotoTypeEnum.strip}
									value={value}
									onChange={(e) => setValue(parseInt(e))}
									defaultValue={1}
									min={0}>
									<NumberInputField />
									<NumberInputStepper bg="teal">
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								<Button
									name={PhotoTypeEnum.strip}
									variant="solid"
									colorScheme="teal"
									onClick={handleAddToCart}>
									Add to cart
								</Button>
							</HStack>
						</FormControl>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};
