import {
	AppShell,
	Header,
	Footer,
	Text,
	Group,
	useMantineTheme,
	Navbar,
	NavLink,
} from '@mantine/core';

import { Link, useLocation } from 'react-router-dom';

const BoundNavLink = ({ label = '', to = '', color = undefined as any }) => {
	const location = useLocation();
	return (
		<NavLink
			component={Link}
			active={location.pathname === to}
			label={label}
			to={to}
			color={color}
		/>
	);
};

function Scaffold({ footer = undefined as any, children = undefined as any }) {
	const theme = useMantineTheme();
	return (
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
			footer={
				<Footer height={60} p='md'>
					<Group noWrap>{footer}</Group>
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
						<Text>INVTERM</Text>
					</div>
				</Header>
			}
			navbar={
				<Navbar width={{ base: 300 }}>
					<BoundNavLink
						label='Item Types'
						to='/item-types'
						color='green'
					/>
					<BoundNavLink label='Inventory' to='/inventory' />
					<BoundNavLink
						label='Recipes'
						to='/recipes'
						color='violet'
					/>
					<BoundNavLink label='Cart' to='/cart' />
				</Navbar>
			}
		>
			{children}
		</AppShell>
	);
}

export default Scaffold;
