import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "DONE" | "DOING" | "TO DO";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
