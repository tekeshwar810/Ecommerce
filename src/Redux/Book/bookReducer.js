import { BUY_BOOK,SELL_BOOK } from "./bookType"
const intialState={
    numberOfBooks:10
}

const bookReducer = (state= intialState,action)=>{
    switch(action.type){
        // case BUY_BOOK:return{
        //     ...state,
        //     numberOfBooks:state.numberOfBooks-action.payload
        // }
        // case SELL_BOOK:return{
        //     ...state,
        //     numberOfBooks:state.numberOfBooks+1
        // }
        default: return state
    } 
}

export default bookReducer;