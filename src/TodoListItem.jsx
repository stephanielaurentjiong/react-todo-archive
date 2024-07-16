import React from 'react';

function TodoListItem({todo}) {
    return (
        <li>{todo.title}</li> //Access props.todo.title to display the title
    )
}

export default TodoListItem;