import {
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';
import { ShoppingCart } from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface CartItem {
	id: number;
	quantity: number;
	isFree?: boolean;
}

interface PhotoPackageProviderProps {
	children: ReactNode;
}

interface PhotoPackageContextProps {
	getCartItemsQuantity: (id: number) => number;
	openCart: () => void;
	closeCart: () => void;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartQuantity: number;
	cartItems: CartItem[];
	isWinner: boolean;
	setIsWinner: React.Dispatch<React.SetStateAction<boolean>>;
	resetCart: () => void;
	totalRevenue: number;
	setTotalRevenue: React.Dispatch<React.SetStateAction<number>>;
}

const PhotoPackageContext = createContext(
	{} as PhotoPackageContextProps
);

export const usePhotoPackageContext = () => {
	return useContext(PhotoPackageContext);
};

export const PhotoPackageProvider = ({
	children,
}: PhotoPackageProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isWinner, setIsWinner] = useState(true);
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		'shopping-cart',
		[]
	);
	const [totalRevenue, setTotalRevenue] = useLocalStorage<number>(
		'total-revenue',
		0
	);

	const openCart = () => setIsOpen(true);

	const closeCart = () => setIsOpen(false);

	const resetCart = () => {
		setCartItems([]);
	};

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const getCartItemsQuantity = (id: number) => {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	};

	const increaseCartQuantity = (id: number) => {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, quantity: 1 }];
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	setInterval(() => setIsWinner(true), 1000 * 60);
	setInterval(() => setTotalRevenue(0), 1000 * 60);

	const removeFromCart = (id: number) => {
		setCartItems((currentItems) =>
			currentItems.filter((item) => item.id !== id)
		);
	};

	const decreaseCartQuantity = (id: number) => {
		setCartItems((currentItems) => {
			if (
				currentItems.find((item) => item.id === id)?.quantity === 1
			) {
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	return (
		<PhotoPackageContext.Provider
			value={{
				openCart,
				closeCart,
				getCartItemsQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				isWinner,
				setIsWinner,
				resetCart,
				totalRevenue,
				setTotalRevenue,
			}}>
			{children}
			<ShoppingCart isOpen={isOpen} />
		</PhotoPackageContext.Provider>
	);
};
