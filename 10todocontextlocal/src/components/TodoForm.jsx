import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-200 text-black"
      />

      <button
        type="submit"
        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        Add
      </button>
    </form>
  );
}
export default TodoForm;
