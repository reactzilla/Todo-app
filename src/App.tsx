import "./App.css";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  };
  const removeHandler = (id: string) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <div>
      <NewTodo addTodo={addHandler} />
      <Todos items={todos} removeTodo={removeHandler}/>
    </div>
  );
}

export default App;
