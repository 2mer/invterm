import { Button, Group, TextInput } from '@mantine/core';
import { Plus } from 'tabler-icons-react';

function InventoryControls({
	filter,
	onAddClicked = () => {},
	color = undefined as any,
}) {
	return (
		<Group noWrap>
			<Button onClick={onAddClicked} color={color}>
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
