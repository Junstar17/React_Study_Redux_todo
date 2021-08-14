import React from 'react'
import { connect } from 'react-redux'
import Todos from '../components/Todos'
import { toggle,insert,remove,changeInput } from '../modules/todos'
const TodosContainer = ({input,todos,changeInput,toggle,insert,remove}) => {
    return (
        <div>
            <Todos 
                input={input}
                todos = {todos}
                onChangeInput= {changeInput}
                onInsert={insert}
                onToggle={toggle}
                onRemove={remove}
            />
        </div>
    )
}

export default connect(
    state => ({
        todos: state.todos.todos,
        input: state.todos.input
    }),
    {
        toggle,
        insert,
        remove,
        changeInput
    }
)(TodosContainer)
