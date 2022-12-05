import { Button, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { db } from '../../db/db';
import { Plus } from 'tabler-icons-react';
import Item from '../../db/Item';
import Ingredient from '../../db/Ingredient';

function AddRecipeForm({
	name = '',
	description = '',
	ingredients = [] as Ingredient[],
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
				<Text>Ingredients</Text>
				<Text>WIP</Text>
				<Button type='submit' fullWidth color='violet' variant='filled'>
					<Plus />
					ADD RECIPE
				</Button>
			</Stack>
		</form>
	);
}

export default AddRecipeForm;
