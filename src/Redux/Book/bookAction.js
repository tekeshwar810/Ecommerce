import { BUY_BOOK,SELL_BOOK } from "./bookType";

export const buyBook = (number=1)=>{
    return{
        type:BUY_BOOK,
        payload:Number(number)
    }
}

export const sellBook = ()=>{
    return{
        type:SELL_BOOK
    }
}

