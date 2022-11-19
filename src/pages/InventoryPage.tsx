import { Stack } from '@mantine/core';
import { useState } from 'preact/hooks';
import Inventory from '../components/Inventory';
import InventoryControls from '../components/InventoryControls';
import { useSignal } from '@preact/signals';

function InventoryPage() {
	const filter = useSignal('');

	return (
		<Stack>
			<InventoryControls filter={filter} />
			<Inventory filter={filter} />
		</Stack>
	);
}

export default InventoryPage;
