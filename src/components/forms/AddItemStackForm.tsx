import {
	Autocomplete,
	Button,
	Group,
	NumberInput,
	Select,
	Stack,
	Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db/db';
import { Plus } from 'tabler-icons-react';
import { closeModal, openModal } from '@mantine/modals';
import AddItemForm from './AddItemForm';
import ItemStack from '../../db/ItemStack';
import { addItemStack } from '../../db/api';

function AddItemStackForm({ item = '', count = 0, onSubmit = (e: any) => {} }) {
	const items = useLiveQuery(() =>
		db.items
			.toArray()
			.then((items) =>
				items.map((item) => ({ value: item.gid, label: item.name }))
			)
	);
	const form = useForm({
		initialValues: {
			item,
			count,
		},
	});

	return (
		<form
			onSubmit={form.onSubmit(({ item, count }) => {
				return addItemStack(
					db.inventory,
					new ItemStack(count, item)
				).then((data) => {
					onSubmit(data);
				});
			})}
		>
			<Stack>
				<Select
					label='Item'
					placeholder='Search item...'
					withAsterisk
					searchable
					creatable
					getCreateLabel={(query: string) => (
						<Group noWrap>
							<Plus />
							<Text>Create '{query}'</Text>
						</Group>
					)}
					onCreate={(query: string) => {
						openModal({
							modalId: 'addItemType',
							title: 'Add item type',
							children: (
								<AddItemForm
									name={query}
									onSubmit={() => {
										closeModal('addItemType');
									}}
								/>
							),
						});
					}}
					data={items ?? []}
					{...form.getInputProps('item')}
				/>
				<NumberInput
					withAsterisk
					label='Amount'
					{...form.getInputProps('count')}
				/>
				<Button type='submit' fullWidth color='blue' variant='filled'>
					<Plus /> ADD ITEMS
				</Button>
			</Stack>
		</form>
	);
}

export default AddItemStackForm;
