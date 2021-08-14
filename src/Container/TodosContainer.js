import React, {useCallback} from 'react'
import { connect,useSelector, useDispatch } from 'react-redux'
import Todos from '../components/Todos'
import { toggle,insert,remove,changeInput } from '../modules/todos'
const TodosContainer = () => {

    const {todos, input} = useSelector(({todos}) => ({
        todos: todos.todos,
        input: todos.input
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);
    return (
        <div>
            <Todos 
                input={input}
                todos = {todos}
                onChangeInput= {onChangeInput}
                onInsert={onInsert}
                onToggle={onToggle}
                onRemove={onRemove}
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
