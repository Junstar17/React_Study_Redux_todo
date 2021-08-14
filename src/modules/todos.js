import {createAction,handleActions} from 'redux-actions';

// 액션 정의
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

let id = 2;

// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });

// export const remove = id => ({
//     type: REMOVE,
//     id
// });

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done:false
}));
export const toggle = createAction(TOGGLE, id=>id);
export const remove = createAction(REMOVE);

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

// function todos( state = initialState, action) {
//     switch(action.type){
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(item => (item.id !== action.id))
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => 
//                     (todo.id === action.id ?
//                         {...todo, done: !todo.done}
//                         : todo)
//                 )
//             };
//         default:
//             return state;
        
//     }
// }

const todos = () => handleActions({
    [INSERT]: (state,action) => ({...state, todos: state.todos.concat(action.payload)}),
    [CHANGE_INPUT]: (state,action) => ({...state, input: action.payload}),
    [REMOVE]: (state,action) => ({...state, todos: state.todos.filter((todo) => (todo.id !== action.payload))}),
    [TOGGLE]: (state,{payload: id}) => ({...state, todos: state.todos.map((todo) => todo.id === id ? {...todo,done: !todo.done} : todo)})
})
export default todos;