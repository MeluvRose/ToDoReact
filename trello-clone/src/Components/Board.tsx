import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { useRecoilState } from "recoil";
import { toDoState } from "../states";
import styled from "styled-components";

const BoardStructure = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <BoardStructure ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DraggableCard key={toDo} toDo={toDo} index={index} />
          ))}
          {magic.placeholder}
        </BoardStructure>
      )}
    </Droppable>
  );
}

export default Board;
