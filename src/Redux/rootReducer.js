import { combineReducers } from 'redux'
import bookReducer from "./Book/bookReducer";
import userReducer from './User/userReducer';

export const RootReducer = combineReducers({
    user:userReducer,
    book:bookReducer
})