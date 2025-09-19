import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function TodoReduxTookit() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 min-w-full">
      <h1 className="text-3xl font-bold text-indigo-400 mt-10">
        📝 Redux Toolkit Todo App
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default TodoReduxTookit;
