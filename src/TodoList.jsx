import React from 'react';
import TodoListItem from './TodoListItem';

// let todoList = [
//     {
//       id: 123,
//       title: "Complete React Week1"
//     },
//     {
//       id: 213,
//       title: "Complete Node Week1"
//     },
//     {
//       id: 321,
//       title: "Complete Intro Week1"
//     }
//   ]
  

const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <div>
            <ul>
                {todoList.map((item) => (
                   
                      <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}/> //Pass key and todo as props to TodoListItem
                
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
