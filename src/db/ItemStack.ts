import AbstractEntity from "./AbstractEntity";
import ICuid from "./ICuid";
import Item from "./Item";

export default class ItemStack extends AbstractEntity {
	item?: Item;

	constructor(
		public count: number,
		public itemId: ICuid,
		gid?: ICuid
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