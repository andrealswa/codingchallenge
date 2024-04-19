import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { Button } from '@chakra-ui/react';

interface ToggleColorThemeProps {
	className?: string;
}

export const ToggleColorTheme = (props: ToggleColorThemeProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Button
			className={props.className ? props.className : ''}
			onClick={() => toggleColorMode()}>
			{colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
};
