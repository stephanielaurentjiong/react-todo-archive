import React from 'react';

function TodoListItem({todo, onRemoveTodo}) {
    return (
        <>
            <li>{todo.title} {/* Access props.todo.title to display the title */}
            <button type="button" onClick={ () => onRemoveTodo(todo.id)}>Remove</button>
            </li>  
            
            
        </>
    )
}

export default TodoListItem;