import React, { createContext, useState } from "react";
import Todo from "../models/todo";
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextvalue: TodosContextObj = {
    items: todos,
    addTodo: addHandler,
    removeTodo: removeHandler
  };
  return <TodosContext.Provider value={contextvalue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
