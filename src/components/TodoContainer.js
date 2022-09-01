import React from "react";
import TodoElement from "./TodoElement";
const TodoContainer = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <TodoElement
          key={todo.id}
          setTodos={setTodos}
          todo={todo}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default TodoContainer;
