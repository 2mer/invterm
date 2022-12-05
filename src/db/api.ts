import { Table } from "dexie";
import { db } from "./db";
import ItemStack from "./ItemStack";
import Recipe from "./Recipe";

export async function loadItemStacks<T extends ItemStack>(itemStacks: T[]): Promise<T[]> {
	const items = await db.items.where('gid').anyOf(...new Set(itemStacks.map(stack => stack.itemId))).toArray();

	const itemGidMap = new Map(items.map(item => [item.gid, item]));

	itemStacks.forEach(itemStack => {
		itemStack.item = itemGidMap.get(itemStack.itemId);
	})

	return itemStacks;
}

export async function addItemStack(table: Table<ItemStack>, itemStack: ItemStack) {

	const foundStack = await table.where('itemId').equals(itemStack.itemId).first();

	if (!foundStack) {
		return table.add(itemStack);
	}

	return table.put(foundStack.merge(itemStack));


}

export async function removeItemStack(itemStack: ItemStack) {

}

export async function loadRecipes(recipes: Recipe[]) {
	const recipeIngredients = await db.ingredients.where('recipeId').anyOf(...new Set(recipes.map(recipe => recipe.gid!))).toArray();
	const resolvedRecipeIngredients = await loadItemStacks(recipeIngredients);

	recipes.forEach(recipe => {
		recipe.ingredients = resolvedRecipeIngredients.filter(ing => ing.recipeId === recipe.gid!);
	});

	return recipes;
}