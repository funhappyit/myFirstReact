import React, {useReducer, useRef}from 'react';
//reduce라는 함수 만들기
function reducer(state, action) {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}


function Counter() {
    
    const [number, dispatch] = useReducer(reducer,0);

    //const [number, setNumber] = useState(0);
    const onIncrease = () =>{
        dispatch({
            type:'INCREMENT'
        })
    }
    const onDecrease = () =>{
        dispatch({
            type:'DECREMENT'
        })
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* onClikc={onIncrease()}=>이런식으로 하면 렌더링 될때 onIncrease()함수가 호출된다. */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
