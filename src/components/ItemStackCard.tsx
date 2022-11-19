import {
	ActionIcon,
	Badge,
	Button,
	Card,
	Divider,
	Group,
	Stack,
	Title,
} from '@mantine/core';
import { Plus, Minus } from 'tabler-icons-react';
import compactNumber from '../logic/compactNumber';
import { useDrag } from 'react-dnd';
import DragItemTypes from './DragItemTypes';
import ItemStack from '../db/ItemStack';
import DragDropTargets from './DragDropTargets';
import { db } from '../db/db';

function ItemStackCard({ itemStack }: { itemStack: ItemStack }) {
	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: DragItemTypes.ITEMSTACK,
			item: { itemStack },
			end: (item, monitor) => {
				const dropResult: any = monitor.getDropResult();
				if (item && dropResult) {
					if (dropResult.id === DragDropTargets.DELETE) {
						db.inventory.delete(item.itemStack.gid!);
					}
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
				handlerId: monitor.getHandlerId(),
			}),
		}),
		[itemStack]
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
					<Title order={3}>{itemStack.item!.name}</Title>
				</Group>
			</Stack>
			<Card.Section>
				<Divider
					labelPosition='center'
					label={
						<Badge
							size='lg'
							style={{
								boxShadow: '0 0 0 6px white, 0 0 0 7px #ced4da',
								zIndex: 1,
							}}
						>
							{compactNumber.format(itemStack.count)}
						</Badge>
					}
					mb='-12px'
				/>
				<Group noWrap spacing={0}>
					<Button variant='subtle' color='red' radius={0} fullWidth>
						<Minus />
					</Button>
					<Button variant='subtle' color='green' radius={0} fullWidth>
						<Plus />
					</Button>
				</Group>
			</Card.Section>
		</Card>
	);
}

export default ItemStackCard;
