import { ActionIcon, Group, Title } from '@mantine/core';
import { closeModal, openModal } from '@mantine/modals';
import { ArrowNarrowLeft } from 'tabler-icons-react';
import AddItemStackForm from '../components/forms/AddItemStackForm';
import AddRecipeForm from '../components/forms/AddRecipeForm';

export default () =>
	openModal({
		modalId: 'addRecipeModal',
		title: (
			<Group noWrap>
				<ActionIcon
					onClick={() => {
						closeModal('addRecipeModal');
					}}
				>
					<ArrowNarrowLeft />
				</ActionIcon>
				<Title order={1}>Add Recipe</Title>
			</Group>
		),
		fullScreen: true,

		children: (
			<AddRecipeForm
				onSubmit={() => {
					closeModal('addRecipeModal');
				}}
			/>
		),
	});
