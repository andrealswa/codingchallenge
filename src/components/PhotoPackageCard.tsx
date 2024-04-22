import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Center,
	Divider,
	HStack,
	Heading,
	IconButton,
	Image,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { PhotoTypeEnum } from '../pages/challengetwo/ChallengeTwo';
import { formatCurrency } from '../utilities/formatCurrency';
import { usePhotoPackageContext } from '../context/PhotoPackageContext';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export interface PhotoPackage {
	id: number;
	name: string;
	price: number;
	image: string;
}

interface PhotoPackageCardProps {
	photoPackage: PhotoPackage;
}

export const PhotoPackageCard = ({
	photoPackage,
}: PhotoPackageCardProps) => {
	const {
		getCartItemsQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
	} = usePhotoPackageContext();
	const quantity = getCartItemsQuantity(photoPackage.id);

	return (
		<Card key={photoPackage.id} maxW="sm">
			<CardBody>
				<VStack>
					<Image
						className="challenge-two--card-content"
						boxSize="300px"
						src={photoPackage.image}
						alt="print example photo"
						borderRadius="lg"
					/>
				</VStack>
				<Stack mt="6" spacing="3">
					<Heading size="md">{photoPackage.name}</Heading>
					<Text color="teal.400" fontSize="2xl">
						{formatCurrency(photoPackage.price)}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				{quantity === 0 ? (
					<Center>
						<Button
							name={PhotoTypeEnum.print}
							variant="solid"
							colorScheme="teal"
							onClick={() => increaseCartQuantity(photoPackage.id)}>
							Add to cart
						</Button>
					</Center>
				) : (
					<HStack>
						<Center>
							<IconButton
								aria-label="Remove item"
								disabled={quantity === 0}
								onClick={() => decreaseCartQuantity(photoPackage.id)}
								icon={<MinusIcon />}
								variant="solid"
								colorScheme="teal"
							/>
							<div>
								<span>{`${quantity} in cart`}</span>
							</div>
							<IconButton
								aria-label="Add item"
								onClick={() => increaseCartQuantity(photoPackage.id)}
								icon={<AddIcon />}
								variant="solid"
								colorScheme="teal"
							/>
						</Center>
					</HStack>
				)}
			</CardFooter>
		</Card>
	);
};
