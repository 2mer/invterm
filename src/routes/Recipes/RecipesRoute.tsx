import { Stack } from '@mantine/core';
import { useSignal } from '@preact/signals';
import DeleteDropTarget from '../../components/DeleteDropTarget';
import InventoryControls from '../../components/InventoryControls';
import Scaffold from '../../components/Scaffold';
import addItemsModal from '../../modals/addItemsModal';
import addRecipeModal from '../../modals/addRecipeModal';
import Recipes from './Recipes';

function RecipesRoute() {
	const filter = useSignal('');

	return (
		<Scaffold footer={<DeleteDropTarget />}>
			<Stack>
				<InventoryControls
					filter={filter}
					onAddClicked={addRecipeModal}
					color='violet'
				/>
				<Recipes filter={filter} />
			</Stack>
		</Scaffold>
	);
}

export default RecipesRoute;
