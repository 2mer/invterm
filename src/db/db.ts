import Dexie, { Table } from 'dexie';
import Ingredient from './Ingredient';
import Item from './Item';
import ItemStack from './ItemStack';
import Recipe from './Recipe';

export class ApplicationDB extends Dexie {
	items!: Table<Item, string>;
	cart!: Table<ItemStack, string>;
	inventory!: Table<ItemStack, string>;
	recipes!: Table<Recipe, string>;
	ingredients!: Table<Ingredient, string>;

	constructor() {
		super('invtermDB');

		this.version(1).stores({
			items: '&gid, name, description',
			cart: '&gid, itemId, count',
			inventory: '&gid, itemId, count',
			recipes: '&gid, name, description',
			ingredients: '&gid, itemId, count, recipeId',
		});

		this.items.mapToClass(Item);
		this.cart.mapToClass(ItemStack);
		this.inventory.mapToClass(ItemStack);
		this.recipes.mapToClass(Recipe);
		this.ingredients.mapToClass(Ingredient);
	}
}

export const db = new ApplicationDB();