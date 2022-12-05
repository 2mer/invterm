import { Stack } from '@mantine/core';
import { useSignal } from '@preact/signals';
import DeleteDropTarget from '../../components/DeleteDropTarget';
import InventoryControls from '../../components/InventoryControls';
import Scaffold from '../../components/Scaffold';
import addItemTypeModal from '../../modals/addItemTypeModal';
import ItemTypes from './ItemTypes';

function ItemTypesRoute() {
	const filter = useSignal('');

	return (
		<Scaffold footer={<DeleteDropTarget />}>
			<Stack>
				<InventoryControls
					filter={filter}
					onAddClicked={() => addItemTypeModal()}
					color={'green'}
				/>
				<ItemTypes filter={filter} />
			</Stack>
		</Scaffold>
	);
}

export default ItemTypesRoute;
