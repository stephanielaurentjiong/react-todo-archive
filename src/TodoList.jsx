import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css"


const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <div>
      <ul className={styles.todoListContainer}>
        {todoList.map((item) => (
          <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} /> //Pass key and todo as props to TodoListItem
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
