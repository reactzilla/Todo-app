import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{addTodo: (e: string) => void }> = (props) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextRef.current!.value;

    if(enteredText.trim().length === 0) {
        // throw an error
        return;
    }

    props.addTodo(enteredText);
    todoTextRef.current!.value = '';
  };
  // todoRef is using UseRef hook.
  // with HTMLInputElement we are telling TS that it will be used on an input element with the default value as null.
  const todoTextRef = useRef<HTMLInputElement>(null);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
}
export default NewTodo;