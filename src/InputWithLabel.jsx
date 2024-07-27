import * as React from 'react'

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => { //receive
    const inputRef = React.useRef();
    React.useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <>
            <label htmlFor="todoTitle">{children}</label> 
            <input 
            type="text" 
            id="todoTitle" 
            name="title" 
            value={todoTitle} //control input
            onChange={handleTitleChange} 
            ref={inputRef}/> 
        </>
    )
}

export default InputWithLabel;