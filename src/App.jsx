import * as React from 'react';


var todoList = [
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

function App () {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map (function (item) {
          return (
            <li key="item.id">{item.title}</li>
        )
        })}
      </ul>
    </div>
  );
}

export default App;