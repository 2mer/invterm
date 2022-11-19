import { Button, Group, TextInput } from '@mantine/core';
import { closeModal, openModal } from '@mantine/modals';
import { Plus } from 'tabler-icons-react';
import AddItemStackForm from './forms/AddItemStackForm';

function InventoryControls({ filter }) {
	return (
		<Group noWrap>
			<Button
				onClick={() =>
					openModal({
						modalId: 'addItemsModal',
						title: 'Add items',
						children: (
							<AddItemStackForm
								onSubmit={() => {
									closeModal('addItemsModal');
								}}
							/>
						),
					})
				}
			>
				<Plus /> ADD
			</Button>
			<TextInput
				value={filter.value}
				onChange={(e) => (filter.value = e.currentTarget.value)}
			/>
		</Group>
	);
}

export default InventoryControls;
