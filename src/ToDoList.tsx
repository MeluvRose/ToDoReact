import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
  toDo: String;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a To-Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
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
