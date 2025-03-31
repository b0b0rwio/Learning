import React, { useReducer, useState } from 'react'
const ReducerHook = () => {
   const actions={
    INCREMENT:"increment",
    DECREMENT:"decrement"
   }
    function reducerFunc(state,action){
       switch(action.type){
        case actions.INCREMENT:
            return {num:state.num+1};
        case actions.DECREMENT:
            return {num:state.num-1}
       }
    }
    //const[count,setCount]=useState(0);
    const [state,dispatch]=useReducer(reducerFunc,{num:0});
    console.log(state)
    function increment(){
        dispatch({type:actions.INCREMENT})
        //setCount(pre=>pre+1)
    }
    function decrement(){
        dispatch({type:actions.DECREMENT})
        //setCount(pre=>pre-1);
    }

    // console.log(state)
     
  return (
    <div>
      <h1 style={{color:"whitesmoke"}}>{state.num}</h1>
      <button onClick={increment} className='btn btn-primary'>add</button>
      <button onClick={decrement} className='btn btn-primary'>minus</button>
    </div>
  )
}

export default ReducerHook
