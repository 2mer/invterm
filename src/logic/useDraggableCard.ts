import { useDrag } from "react-dnd";
import DragDropTargets from "../components/DragDropTargets";

export default function useDraggableCard({ type, item, onDelete }, deps) {
	return useDrag(
		() => ({
			type,
			item,
			end: (item, monitor) => {
				const dropResult: any = monitor.getDropResult();
				if (item && dropResult) {
					if (dropResult.id === DragDropTargets.DELETE) {
						onDelete(item.gid!);
					}
				}
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
				handlerId: monitor.getHandlerId(),
			}),
		}),
		[deps]
	);
}