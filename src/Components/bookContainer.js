import React,{ useState } from "react";
import { connect } from "react-redux";
import { buyBook,sellBook } from "../Redux/index";
const BookContainer = (props) => {
    const [number,setNumber] = useState(1)
    return (
        <>
            <h1>Number of Books:- {props.numberOfBooks}</h1>
            <input type="number" onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyBook(number)}>- {number} </button>
            <br/>
            <br/>
            <button onClick={props.sellBook}>+</button>
        </>
    )
}

const mapStatetoProps=(state)=>{
    return{
        numberOfBooks:state.numberOfBooks
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(number){
            dispatch(buyBook(number))
        },
        sellBook:function(){
            dispatch(sellBook())
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);