import { Badge, Card, Group, List, Stack, Text, Title } from '@mantine/core';
import DragItemTypes from '../../components/DragItemTypes';
import ICuid from '../../db/ICuid';
import Recipe from '../../db/Recipe';
import useDraggableCard from '../../logic/useDraggableCard';

function RecipeCard({
	recipe,
	onDelete,
}: {
	recipe: Recipe;
	onDelete: (gid: ICuid) => void;
}) {
	const [, drag] = useDraggableCard(
		{
			item: { recipe },
			type: DragItemTypes.RECIPE,
			onDelete,
		},
		[recipe]
	);

	return (
		<Card
			w='200px'
			h='200px'
			withBorder
			style={{ display: 'flex', flexDirection: 'column' }}
			ref={drag}
		>
			<Stack justify='space-between' style={{ flex: 1 }} pb='md'>
				<Group noWrap position='apart'>
					<Title order={3}>{recipe!.name}</Title>
					<Text c='dimmed'>{recipe.description}</Text>
					<List>
						{recipe.ingredients?.map((ingredient) => (
							<List.Item key={ingredient.gid}>
								<Group noWrap>
									<Text>{ingredient.item!.name}</Text>
									<Badge>{ingredient.count}</Badge>
								</Group>
							</List.Item>
						))}
					</List>
				</Group>
			</Stack>
		</Card>
	);
}

export default RecipeCard;
