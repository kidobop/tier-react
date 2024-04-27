import { DragDropContext, DropResult } from '@hello-pangea/dnd';

import Tier from './components/Tier';
import { useTierState } from './useTierState';
import { arrayMove, arrayTransfer } from './helpers';

export default function App() {
    const [tiers, setTiers] = useTierState();

    function onDragEnd(result: DropResult) {
        if (!result.destination) return;

        const oldIndex = result.source.index;
        const newIndex = result.destination.index;
        const oldTierName = result.source.droppableId;
        const newTierName = result.destination.droppableId;
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <p>Hello, world!</p>
            </div>
        </DragDropContext>
    );
}
