import { atom, selector } from "recoil";

// type categories = "DONE" | "DOING" | "TO_DO";
export enum Categories {
  "DONE" = "DONE",
  "DOING" = "DOING",
  "TO_DO" = "TO_DO",
}

export interface IToDo {
  id: number;
  text: string;
  // category: categories;
  category: Categories;
}

/*
export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
});
*/

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
