import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoriesState, IToDo, toDoState } from "../states";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      return [
        ...oldToDos.slice(0, targetIdx),
        newToDo,
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  const delToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const item = event.currentTarget.parentNode;
    const text = item?.children[0].textContent;
    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((toDo) => toDo.text === text);
      return [
        ...oldToDos.slice(0, targetIdx),
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {Object.keys(categories).map(
        (k, index) =>
          category !== k && (
            <button name={k} key={index} onClick={onClick}>
              {categories[k as keyof typeof categories]}
            </button>
          )
      )}
      <button onClick={delToDo}>❌</button>
    </li>
  );
}

export default ToDo;
