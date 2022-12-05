import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import InventoryRoute from './routes/Inventory/InventoryRoute';
import ItemTypesRoute from './routes/ItemTypes/ItemTypesRoute';
import RecipesRoute from './routes/Recipes/RecipesRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to='/inventory' />,
	},
	{
		path: '/inventory',
		element: <InventoryRoute />,
	},
	{
		path: '/item-types',
		element: <ItemTypesRoute />,
	},
	{
		path: '/recipes',
		element: <RecipesRoute />,
	},
]);

export default function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<RouterProvider router={router} />
		</DndProvider>
	);
}
