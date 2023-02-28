import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector } from "../states";
import ToDo from "./ToDo";
import SelectToDo from "./SelectToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateCategory />
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
