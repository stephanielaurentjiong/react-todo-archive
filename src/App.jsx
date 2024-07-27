import * as React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

const useSemiPersistentState = () => {
  const [ todoList, setTodoList ] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );
  
  React.useEffect(()=> {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [ todoList, setTodoList ]
}



function App () {
  
  const [ todoList, setTodoList ] = useSemiPersistentState('');
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }
  return (
    <>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      <AddTodoForm onAddTodo={addTodo}/>
      
    </>
  );
}

export default App;