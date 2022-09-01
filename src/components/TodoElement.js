import React from "react";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TodoElement = ({ todos, setTodos, todo }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    console.log(todo.id);
  };
  const checkTodo = () => {};
  return (
    <div className="todo">
      <input type="text" value={todo.text} />
      <div className="icons">
        <FontAwesomeIcon
          className="done"
          onClick={checkTodo}
          size="2x"
          icon={faCheck}
        />
        <FontAwesomeIcon
          className="delete"
          onClick={deleteTodo}
          icon={faTrash}
        />
      </div>
    </div>
  );
};
export default TodoElement;
