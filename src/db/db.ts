import Dexie, { Table } from 'dexie';
import Item from './Item';
import ItemStack from './ItemStack';

export class ApplicationDB extends Dexie {
	items!: Table<Item, string>;
	cart!: Table<ItemStack, string>;
	inventory!: Table<ItemStack, string>;

	constructor() {
		super('invtermDB');

		this.version(1).stores({
			items: '&gid, name, description',
			cart: '&gid, itemId, count',
			inventory: '&gid, itemId, count',
		});

		this.items.mapToClass(Item);
		this.cart.mapToClass(ItemStack);
		this.inventory.mapToClass(ItemStack);
	}
}

export const db = new ApplicationDB();