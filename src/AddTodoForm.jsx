import * as React from 'react'
import InputWithLabel from './InputWithLabel';


function AddTodoForm ({onAddTodo}) {
    const [ todoTitle, setTodoTitle ] = React.useState('');

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle); 
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({ title: todoTitle, id : Date.now() });
        setTodoTitle('')
    }; 

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel //InputWithLabel component
                todoTitle={todoTitle}  //pass in the props from the InputWithLabel.jsx
                handleTitleChange={handleTitleChange} //this too
               >
                Title:
               </InputWithLabel>
                
                
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;
