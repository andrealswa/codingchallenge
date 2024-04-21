import {
	Button,
	Center,
	HStack,
	Icon,
	IconButton,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './ChallengeTwo.scss';
import photoPackages from '../../data/photoPackages.json';
import { PhotoPackageCard } from '../../components/PhotoPackageCard';
import { usePhotoPackageContext } from '../../context/PhotoPackageContext';

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
	const { openCart, cartQuantity } = usePhotoPackageContext();

	return (
		<div className="challenge-two--container">
			<div className="challenge-two--card-container">
				<Text fontSize="4xl">I'm feeling lucky!</Text>
				<HStack>
					<Button
						aria-label="Order Items"
						onClick={openCart}
						leftIcon={<Icon boxSize={8} as={FaShoppingCart} />}>
						<Text>{`${cartQuantity} item(s)`}</Text>
					</Button>
				</HStack>
			</div>
			<Center>
				<Wrap justify="space-between" w="100%">
					{photoPackages.map((photoPackage) => (
						<WrapItem>
							<PhotoPackageCard photoPackage={photoPackage} />
						</WrapItem>
					))}
				</Wrap>
			</Center>
		</div>
	);
};
