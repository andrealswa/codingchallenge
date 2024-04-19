import { HStack, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './ChallengeTwo.scss';
import photoPackages from '../../data/photoPackages.json';
import { PhotoPackageCard } from '../../components/PhotoPackageCard';

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
				{photoPackages.map((photoPackage) => (
					<PhotoPackageCard photoPackage={photoPackage} />
				))}
			</div>
		</div>
	);
};
