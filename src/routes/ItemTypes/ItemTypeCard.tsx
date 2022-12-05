import { Card, Group, Stack, Text, Title } from '@mantine/core';
import DragItemTypes from '../../components/DragItemTypes';
import Item from '../../db/Item';
import useDraggableCard from '../../logic/useDraggableCard';

function ItemTypeCard({
	item,
	onDelete,
}: {
	item: Item;
	onDelete: (gid: string) => void;
}) {
	const [, drag] = useDraggableCard(
		{
			item,
			type: DragItemTypes.ITEM,
			onDelete,
		},
		[item]
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
					<Title order={3}>{item!.name}</Title>
					<Text c='dimmed'>{item.description}</Text>
				</Group>
			</Stack>
		</Card>
	);
}

export default ItemTypeCard;
