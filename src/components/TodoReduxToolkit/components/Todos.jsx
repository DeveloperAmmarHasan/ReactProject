import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-8 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4">Your Todos</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow-sm"
          >
            <span className="text-gray-100">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="p-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-white"
              title="Delete Todo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <p className="text-gray-400 text-center mt-4">
            🎉 No todos yet. Add one above!
          </p>
        )}
      </ul>
    </div>
  );
}

export default Todos;
