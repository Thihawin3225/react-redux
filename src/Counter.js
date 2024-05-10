import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const isShow = useSelector(state => state.isShow)
    const increment = () => {
        dispatch({type : "increase"})
    }
     
     const incrementBy5 = () => {
       dispatch({ type: "increaseBy5" , amount : 4 });
    };
    
    const decrement = () => {
        dispatch({ type : "decrease"})
    }
    const hideAndshow = () => {
        dispatch({type : "hideandshow"})
    }
  return (
    <div>
      <div>
        <h2>{isShow ? `Count :  ${count} ` : ""}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementBy5}>incrementBy5</button>
        <button onClick={hideAndshow}>hideAndshow</button>
      </div>
    </div>
  );
}

export default Counter
