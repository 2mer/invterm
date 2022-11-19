import { useLiveQuery } from 'dexie-react-hooks';
import { loadItemStack } from '../db/api';
import { db } from '../db/db';
import ItemStackCard from './ItemStackCard';

function Inventory({ filter }) {
	const currentFilter = filter.value;
	const inventory = useLiveQuery(
		() =>
			db.inventory
				.toArray()
				.then(loadItemStack)
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
				<ItemStackCard itemStack={stack} />
			))}
		</div>
	);
}

export default Inventory;
