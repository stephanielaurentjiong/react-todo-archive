import React from 'react';

let todoList = [
    {
      id: 123,
      title: "Complete React Week1"
    },
    {
      id: 213,
      title: "Complete Node Week1"
    },
    {
      id: 321,
      title: "Complete Intro Week1"
    }
  ]
  

function TodoList() {
    return (
        <div>
            <ul>
                {todoList.map (function (item) {
                    return (
                    <li key="item.id">{item.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;