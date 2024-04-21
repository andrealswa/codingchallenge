import {
	HStack,
	Image,
	VStack,
	Text,
	Flex,
	Spacer,
	IconButton,
	Box,
} from '@chakra-ui/react';
import { usePhotoPackageContext } from '../context/PhotoPackageContext';
import photoPackages from '../data/photoPackages.json';
import { formatCurrency } from '../utilities/formatCurrency';
import { CloseIcon } from '@chakra-ui/icons';

interface CartItemProps {
	id: number;
	quantity: number;
	isFree?: boolean;
}

export const CartItem = ({ id, quantity, isFree }: CartItemProps) => {
	const { removeFromCart } = usePhotoPackageContext();
	const item = photoPackages.find(
		(photoPackage) => photoPackage.id === id
	);

	// check if null or undefined
	if (item == null) return null;

	const formattedPrice = formatCurrency(item.price);
	const totalPrice = formatCurrency(item.price * quantity);

	return (
		<Flex width="100%">
			<Box>
				<HStack>
					<Image
						boxSize={100}
						src={item.image}
						alt="print example photo"
					/>
					<VStack align="start">
						<HStack>
							<Text>{item.name}</Text>
							{quantity > 1 && (
								<Text
									color="grey"
									fontSize="small">{`(x${quantity})`}</Text>
							)}
						</HStack>
						<Text>{formattedPrice}</Text>
					</VStack>
				</HStack>
			</Box>
			<Spacer />
			<HStack>
				<Text as={isFree ? 's' : undefined}>{totalPrice}</Text>
				{isFree && (
					<Text color="teal.400" fontSize="2xl">
						0
					</Text>
				)}
				<IconButton
					colorScheme="red"
					onClick={() => removeFromCart(item.id)}
					size="sm"
					aria-label="Remove item"
					icon={<CloseIcon />}
				/>
			</HStack>
		</Flex>
	);
};
