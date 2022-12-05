import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db/db';
import ItemTypeCard from './ItemTypeCard';

function ItemTypes({ filter }) {
	const currentFilter = filter.value;
	const items = useLiveQuery(
		() =>
			db.items
				.toArray()
				.then((items) =>
					currentFilter
						? items.filter((item) =>
								item.name
									.toLowerCase()
									.includes(currentFilter.toLowerCase())
						  )
						: items
				),
		[currentFilter]
	);

	return (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			{items?.map((item) => (
				<ItemTypeCard item={item} onDelete={() => {}} />
			))}
		</div>
	);
}

export default ItemTypes;
