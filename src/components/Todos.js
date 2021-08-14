import React from 'react'

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <input type="checkbox" onClick={() =>onToggle(todo.id)}
            checked={todo.done}
            readOnly={true} />
            <span>{todo.text}</span>
            <button onClick={() =>onRemove(todo.id)}>삭제</button>
        </div>
    )
}
export default function Todos({input,
        todos,
        onChangeInput,
        onInsert,
        onToggle,
        onRemove}) {
        
    const onSubmit = (e) => {
        onInsert(input)
        e.preventDefault();
    };

    const onChange = (e) => {
        onChangeInput(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input} />
                <button type = "submit">등록</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <TodoItem 
                        todo={todo}
                        onToggle={onToggle}
                        onRemove={onRemove}/>
                ))}
              
            </div>
        </div>
    )
}
