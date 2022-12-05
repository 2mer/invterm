import { useLiveQuery } from 'dexie-react-hooks';
import { loadItemStacks } from '../../db/api';
import { db } from '../../db/db';
import ItemStackCard from '../../components/ItemStackCard';
import { openConfirmModal } from '@mantine/modals';
import { Badge, Text } from '@mantine/core';

function Inventory({ filter }) {
	const currentFilter = filter.value;
	const inventory = useLiveQuery(
		() =>
			db.inventory
				.toArray()
				.then(loadItemStacks)
				.then((itemStacks) =>
					currentFilter
						? itemStacks.filter((itemStack) =>
								itemStack
									.item!.name.toLowerCase()
									.includes(currentFilter.toLowerCase())
						  )
						: itemStacks
				),
		[currentFilter]
	);

	return (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			{inventory?.map((stack) => (
				<ItemStackCard
					itemStack={stack}
					onDelete={(gid) => {
						openConfirmModal({
							title: 'Delete Item Stack?',
							children: (
								<Text size='sm'>
									Delete item stack of{' '}
									<Badge>{stack.item!.name}</Badge> x{' '}
									{stack.count}?
								</Text>
							),
							confirmProps: { color: 'red' },
							labels: { confirm: 'DELETE', cancel: 'Cancel' },
							onCancel: () => {},
							onConfirm: () => {
								db.inventory.delete(gid);
							},
						});
					}}
				/>
			))}
		</div>
	);
}

export default Inventory;
