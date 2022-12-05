import { Stack } from '@mantine/core';
import { useSignal } from '@preact/signals';
import DeleteDropTarget from '../../components/DeleteDropTarget';
import Inventory from './Inventory';
import InventoryControls from '../../components/InventoryControls';
import Scaffold from '../../components/Scaffold';
import addItemsModal from '../../modals/addItemsModal';

function InventoryRoute() {
	const filter = useSignal('');

	return (
		<Scaffold footer={<DeleteDropTarget />}>
			<Stack>
				<InventoryControls
					filter={filter}
					onAddClicked={addItemsModal}
				/>
				<Inventory filter={filter} />
			</Stack>
		</Scaffold>
	);
}

export default InventoryRoute;
