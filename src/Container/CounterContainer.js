import React,{useCallback} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Counter from '../components/Counter'
import { decrease, increase } from '../modules/counter'

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    return (
        <Counter 
            number={number}
            onIncrease= {useCallback(() => dispatch(increase()),[dispatch])}
            onDecrease= {useCallback(() => dispatch(decrease()),[dispatch])}
            />
    )
}

// const mapStateToProps = (state) => ({
//     number: state.counter.number
// })

// const mapDispatchToProps = (dispatch) => ({
//     increase: () => {dispatch(increase())},
//     decrease: () => {dispatch(decrease())},
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)


// export default connect(
//     state=> ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease,
//     },
// )(CounterContainer);

// useHook 버전
export default CounterContainer;