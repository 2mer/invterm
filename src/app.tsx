import { useState } from 'preact/hooks';

import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Stack,
	Group,
} from '@mantine/core';
import Inventory from './components/Inventory';
import InventoryControls from './components/InventoryControls';
import InventoryPage from './pages/InventoryPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DeleteInventoryStack from './components/DeleteInventoryStack';

export default function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<DndProvider backend={HTML5Backend}>
			<AppShell
				styles={{
					main: {
						background:
							theme.colorScheme === 'dark'
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint='sm'
				asideOffsetBreakpoint='sm'
				// navbar={
				// 	<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
				// 		<Text>INVTERM</Text>
				// 	</Navbar>
				// }
				// aside={
				// 	<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
				// 		<Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
				// 			<Text>Application sidebar</Text>
				// 		</Aside>
				// 	</MediaQuery>
				// }
				footer={
					<Footer height={60} p='md'>
						<Group noWrap>
							<Text>Application footer</Text>
							<DeleteInventoryStack />
						</Group>
					</Footer>
				}
				header={
					<Header height={{ base: 50, md: 70 }} p='md'>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<MediaQuery
								largerThan='sm'
								styles={{ display: 'none' }}
							>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size='sm'
									color={theme.colors.gray[6]}
									mr='xl'
								/>
							</MediaQuery>

							<Text>INVTERM</Text>
						</div>
					</Header>
				}
			>
				<InventoryPage />
			</AppShell>
		</DndProvider>
	);
}
