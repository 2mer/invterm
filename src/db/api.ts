import { Table } from "dexie";
import { db } from "./db";
import ItemStack from "./ItemStack";

export async function loadItemStack(itemStacks: ItemStack[]) {

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