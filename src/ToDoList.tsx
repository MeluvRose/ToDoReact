import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [error, SetError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    SetError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) SetError("It's Too Short...");
    else console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {error !== " " ? error : null}
      </form>
    </div>
  );
}
*/

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: true, minLength: 10 })}
          placeholder="Email"
        />
        <input
          {...register("Username", { required: true })}
          placeholder="Username"
        />
        <input
          {...register("Password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("Password1", {
            required: "Password required",
            minLength: {
              value: 5,
              message: "This password Too short",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
