import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";

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

interface IForm {
  email: string;
  username: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email Required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as String}</span>
        <input
          {...register("username", { required: "username required" })}
          placeholder="Username"
        />
        <span>{errors?.username?.message as String}</span>
        <input
          {...register("password", {
            required: "Password required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message as String}</span>
        <input
          {...register("password1", {
            required: "Password required",
            minLength: {
              value: 5,
              message: "This password Too short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message as String}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
