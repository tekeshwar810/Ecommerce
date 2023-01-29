import React from "react";
import { useSelector,useDispatch } from "react-redux"; // by using use selector we can access redux store state
import { buyBook,sellBook } from "../Redux";

const HookBookContainer = ()=>{
    const numberOfBooks = useSelector(state=>state.numberOfBooks)
    // const dispatch = useDispatch()
    return(
        <div>
            <h1>Hook Container</h1>
            <h1>Number of Books:-{numberOfBooks}</h1>
            {/* <button onClick={()=>dispatch(buyBook())}>-</button>
            <button onClick={()=>dispatch(sellBook())}>+</button> */}
        </div>
    )
}

export default HookBookContainer;