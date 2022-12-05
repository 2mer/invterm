import { useLiveQuery } from 'dexie-react-hooks';
import { loadRecipes } from '../../db/api';
import { db } from '../../db/db';
import RecipeCard from './RecipeCard';

function Recipes({ filter }) {
	const currentFilter = filter.value;
	const recipes = useLiveQuery(
		() =>
			db.recipes
				.toArray()
				.then(loadRecipes)
				.then((recipes) =>
					currentFilter
						? recipes.filter((recipe) =>
								recipe.name
									.toLowerCase()
									.includes(currentFilter.toLowerCase())
						  )
						: recipes
				),
		[currentFilter]
	);

	return (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			{recipes?.map((recipe) => (
				<RecipeCard recipe={recipe} onDelete={() => {}} />
			))}
		</div>
	);
}

export default Recipes;
