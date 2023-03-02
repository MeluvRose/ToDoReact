import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { useRecoilState } from "recoil";
import { toDoState } from "../states";
import styled from "styled-components";

const BoardStructure = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  border-radius: 5px;
  min-height: 300px;
  background-color: ${(props) => props.theme.boardColor};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <BoardStructure>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </BoardStructure>
  );
}

export default Board;
