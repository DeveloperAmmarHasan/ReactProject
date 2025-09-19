import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // prevent empty todos
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center gap-3 mt-8 w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        className="flex-1 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 py-2 px-4 outline-none transition"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
