import { Button, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { db } from '../../db/db';
import { Plus } from 'tabler-icons-react';
import Item from '../../db/Item';

function AddItemForm({
	name = '',
	description = '',
	onSubmit = (item: Item) => {},
}) {
	const form = useForm({
		initialValues: {
			name,
			description,
		},
	});

	return (
		<form
			onSubmit={form.onSubmit(({ name, description }) => {
				const item = new Item(name, description);
				db.items.add(item).then((data) => {
					item.gid = data;
					onSubmit(item);
				});
			})}
		>
			<Stack>
				<TextInput
					label='name'
					withAsterisk
					{...form.getInputProps('name')}
				/>
				<TextInput
					label='description'
					{...form.getInputProps('description')}
				/>
				<Button type='submit' fullWidth color='green' variant='filled'>
					<Plus />
					ADD ITEM TYPE
				</Button>
			</Stack>
		</form>
	);
}

export default AddItemForm;
