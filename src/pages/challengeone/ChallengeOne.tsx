import React, { useState } from 'react';
import {
	Button,
	FormControl,
	FormHelperText,
	Input,
	Text,
} from '@chakra-ui/react';
import './ChallengeOne.scss';

export const ChallengeOne: React.FC = () => {
	const [inputSentence, setInputSentence] = useState<string | null>(
		null
	);
	const [reversedSentence, setReversedSentence] = useState<string>();
	const reverseWordOrder = (sentence: string | null) => {
		if (sentence == null) return 'Please enter a value to reverse.';
		setReversedSentence(sentence.split('').reverse().join(''));
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSentence(e.target.value);
		setReversedSentence('');
	};

	return (
		<div className="challenge-one--container">
			<FormControl>
				<Text fontSize="4xl">Mirror, Mirror on the Screen!</Text>
				<div className="challenge-one--input-button-container">
					<Input
						focusBorderColor="teal.400"
						type="text"
						id="todo-description"
						name="description"
						onChange={handleOnChange}
						placeholder="Enter something to be reversed"
					/>
					<Button
						colorScheme="teal"
						onClick={() => reverseWordOrder(inputSentence)}>
						Reverse sentence
					</Button>
				</div>
				{reversedSentence && (
					<Text fontSize="3xl">{reversedSentence}</Text>
				)}
				<FormHelperText>
					Enter something to be reversed
				</FormHelperText>
			</FormControl>
		</div>
	);
};
