import { USER_INPUT, USER_LOGIN_INFO, USER_UPDATE_PROFILE } from "./userType";

const intialState = {
    username:"empty",
    userInfo:{}
}

const userReducer = (state= intialState,action)=>{
    switch(action.type){
       case USER_INPUT: return{
            ...state,
            username:action.payload
       }
       case USER_LOGIN_INFO: return{
            ...state,
            userInfo:action.payload
       }
       case USER_UPDATE_PROFILE: return{
            ...state,
            userInfo:action.payload
       }

       default: return state

    }

}

export default userReducer;



