// 액션 정의
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});
let id = 2;
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

// 리듀서
const initialState = {
    input: '',
    todos: [
        {
            id:0,
            text: "리덕스기초",
            done: true
        },
        {
            id:1,
            text: "리액트기초",
            done: false
        }
    ],
}

function todos( state = initialState, action) {
    switch(action.type){
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(item => (item.id !== action.id))
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    (todo.id === action.id ?
                        {...todo, done: !todo.done}
                        : todo)
                )
            };
        default:
            return state;
        
    }
}
export default todos;