import AbstractEntity from "./AbstractEntity";
import ICuid from "./ICuid";
import Ingredient from "./Ingredient";

export default class Recipe extends AbstractEntity {
	ingredients?: Ingredient[];

	constructor(
		public name: string,
		public description: string,
		gid?: ICuid
	) {
		super(gid);

		Object.defineProperties(this, {
			ingredients: { value: undefined, enumerable: false, writable: true },
		});
	}
}