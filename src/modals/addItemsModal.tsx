import { closeModal, openModal } from '@mantine/modals';
import AddItemStackForm from '../components/forms/AddItemStackForm';

export default () =>
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
	});
