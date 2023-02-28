import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../states";
import ToDo from "./ToDo";

function ToDoList() {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const toDos = useRecoilValue(toDoState);

  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
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
