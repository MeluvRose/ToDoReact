import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={0}>
                {() => <li>Hello</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>Hello 2</li>}
              </Draggable>
              <Draggable draggableId="third" index={2}>
                {() => <li>Hello 3</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
