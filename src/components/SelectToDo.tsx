import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, categoriesState } from "../states";

function SelectToDo() {
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  return (
    <select value={category} onInput={onInput}>
      {Object.keys(categories).map((k, index) => (
        <option value={k} key={index}>
          {categories[k as keyof typeof categories]}
        </option>
      ))}
    </select>
  );
}

export default SelectToDo;
