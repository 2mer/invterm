import AbstractEntity from "./AbstractEntity";
import Item from "./Item";

export default class ItemStack extends AbstractEntity {
	item?: Item;

	constructor(
		public count: number,
		public itemId: string,
		gid?: string
	) {
		super(gid);

		Object.defineProperties(this, {
			item: { value: undefined, enumerable: false, writable: true },
		});
	}

	merge(itemStack: ItemStack) {
		this.count += itemStack.count;
		return this;
	}
}