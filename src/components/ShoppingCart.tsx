import {
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';
import {
	CartItem,
	usePhotoPackageContext,
} from '../context/PhotoPackageContext';
import { formatCurrency } from '../utilities/formatCurrency';
import photoPackages from '../data/photoPackages.json';
import { CartItem as CartItemComponent } from './CartItem';

interface ShoppingCartProps {
	isOpen: boolean;
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
	const {
		closeCart,
		cartItems,
		isWinner,
		setIsWinner,
		resetCart,
		totalRevenue,
		setTotalRevenue,
	} = usePhotoPackageContext();

	const total = cartItems.reduce((total, currentItem) => {
		const item = photoPackages.find(
			(photoPackage) => photoPackage.id === currentItem.id
		);
		return total + (item?.price || 0) * currentItem.quantity;
	}, 0);

	console.log(isWinner);

	const handlePurchase = () => {
		if (isWinner) {
			setIsWinner(false);
		}
		setTotalRevenue(totalRevenue + total);
		resetCart();
		closeCart();
	};

	const getTotalItems = (): CartItem[] => {
		if (isWinner && cartItems.length === 1) {
			const freeItems: CartItem[] = photoPackages
				.filter((photoPackage) => photoPackage.id !== cartItems[0].id)
				.map((item) => {
					return { id: item.id, quantity: 1, isFree: true };
				});

			return [...cartItems, ...freeItems];
		} else {
			return cartItems;
		}
	};

	console.log(formatCurrency(totalRevenue));
	return (
		<Drawer
			size="sm"
			isOpen={isOpen}
			placement="right"
			onClose={closeCart}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Order Packages</DrawerHeader>

				<DrawerBody>
					<VStack align="flex-start">
						{isWinner && (
							<Text as="b" fontSize="2xl">
								Congratulations! You are the winner of 2 additonal
								packages with the purchase of one of our orders!
							</Text>
						)}
						{getTotalItems().map((cartItem) => (
							<>
								<CartItemComponent key={cartItem.id} {...cartItem} />
							</>
						))}
						<Divider />
						{isWinner && (
							<>
								{/* <CartItem key={cartItem.id} {...cartItem} /> */}
							</>
						)}
						<Text as="b" fontSize="2xl">
							{`Total: ${formatCurrency(total)}`}
						</Text>
					</VStack>
				</DrawerBody>
				<DrawerFooter>
					<Button onClick={handlePurchase} colorScheme="teal">
						Purchase
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
