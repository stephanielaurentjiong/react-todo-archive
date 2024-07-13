import React from "react";

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
                <label htmlFor="todoTitle">Title </label>
                <input 
                type="text" id="todoTitle" 
                name="title" 
                value={todoTitle} //controlled input
                onChange={handleTitleChange} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;
