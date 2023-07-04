import React from "react";
import { useStorage } from "../hooks/useStorage";
interface stateTypes {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
function InputField({ todo, setTodo, handleAdd }: stateTypes) {
  const [item, setItem] = useStorage("todos", "");
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a task"
          className="text__input"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={() => setItem(todo)}>
          Add
        </button>
        <button type="submit" onClick={() => localStorage.clear()}>
          clear localStorage
        </button>
      </form>
      <div>{item && item}</div>
    </div>
  );
}

export default InputField;
