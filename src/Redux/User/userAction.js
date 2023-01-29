import { USER_INPUT, USER_LOGIN_INFO, USER_UPDATE_PROFILE } from "./userType"

export const userInput = (username)=>{
    return {
        type:USER_INPUT,
        payload:username
    }
}

export const userLoginInfo = (userInfo)=>{
    return{
        type: USER_LOGIN_INFO,
        payload:userInfo
    }
}

export const userUpdateProfile = (userUpdateData)=>{
    return{
        type:USER_UPDATE_PROFILE,
        payload:userUpdateData
    }
}
