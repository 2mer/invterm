import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { render } from 'preact';
import App from './app';

render(
	<MantineProvider withGlobalStyles withNormalizeCSS>
		<ModalsProvider>
			<App />
		</ModalsProvider>
	</MantineProvider>,
	document.getElementById('app') as HTMLElement
);
