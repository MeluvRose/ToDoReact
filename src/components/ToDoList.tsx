import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector, toDoState } from "../states";
import ToDo from "./ToDo";
import SelectToDo from "./SelectToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <SelectToDo />
      <CreateToDo />
      <hr />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

interface IForm {
  email: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

export default ToDoList;
