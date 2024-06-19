import React from "react";

function AddTodoForm () {
    return (
        <div>
            <form>
                <label htmlFor="todoTitle">Title </label>
                <input type="text" id="todoTitle" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;