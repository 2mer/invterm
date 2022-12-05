import ICuid from "./ICuid";
import ItemStack from "./ItemStack";

export default class Ingredient extends ItemStack {
	constructor(
		public recipeId: ICuid,
		count: number,
		itemId: ICuid,
		gid?: ICuid
	) {
		super(count, itemId, gid);
	}
}