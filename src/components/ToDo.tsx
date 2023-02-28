import React from "react";
import { IToDo } from "../states";

function ToDo({ text, category, id }: IToDo) {
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log("i wanna to " + newCategory);
  // };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("i wanna to " + event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
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
