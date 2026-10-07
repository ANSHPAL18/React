import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function todoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return <form action=""></form>;
}

export default todoForm;
