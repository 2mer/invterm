import AbstractEntity from "./AbstractEntity";
import ICuid from "./ICuid";

export default class Item extends AbstractEntity {
	constructor(
		public name: string,
		public description: string,
		gid?: ICuid
	) {
		super(gid)
	}
}