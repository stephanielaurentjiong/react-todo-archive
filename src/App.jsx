import * as React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';



function App () {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;