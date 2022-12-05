import { Button } from '@mantine/core';
import { useDrop } from 'react-dnd';
import DragDropTargets from './DragDropTargets';
import DragItemTypes from './DragItemTypes';

function DeleteDropTarget() {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: [DragItemTypes.ITEMSTACK, DragItemTypes.ITEM],
		drop: () => ({ id: DragDropTargets.DELETE }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const isActive = canDrop && isOver;
	return (
		<div ref={drop} data-testid='dustbin'>
			<div
				style={{
					pointerEvents: 'none',
					opacity: canDrop ? 1 : 0,
					transition: 'all 250ms',
				}}
			>
				<Button variant={isActive ? 'filled' : 'outline'} color='red'>
					DELETE
				</Button>
			</div>
		</div>
	);
}

export default DeleteDropTarget;
