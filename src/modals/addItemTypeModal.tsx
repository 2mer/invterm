import { closeModal, openModal } from '@mantine/modals';
import AddItemForm from '../components/forms/AddItemForm';

export default (query: string = '') => {
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
};
