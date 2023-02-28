import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../states";

/*
[
  {
      "text": "5",
      "id": 1677567147611,
      "category": "TO DO"
  },
  {
      "text": "4",
      "id": 1677567146267,
      "category": "TO DO"
  },
  {
      "text": "3",
      "id": 1677567145289,
      "category": "TO DO"
  },
  {
      "text": "2",
      "id": 1677567144137,
      "category": "TO DO"
  },
  {
      "text": "1",
      "id": 1677567142623,
      "category": "TO DO"
  }
]
*/

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((toDo) => toDo.id === id);
      // console.log(targetIdx);
      const oldToDo = oldToDos[targetIdx];
      const newToDo = { text, id, category: name };
      console.log(oldToDo, newToDo);
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
