import AbstractEntity from "./AbstractEntity";

export default class Item extends AbstractEntity {
	constructor(
		public name: string,
		public description: string,
		gid?: string
	) {
		super(gid)
	}
}