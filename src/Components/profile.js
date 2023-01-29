import { useSelector,useDispatch } from 'react-redux';
import { userLoginInfo } from '../Redux';
import Dashboard from './dashboard';
import { useFormik } from 'formik';
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { userUpdateProfile } from '../Redux/User/userAction';
import {  useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const Profile = ()=>{
    const [ inputDisable , setInputDisable ] = useState(true)
    const userInfo = useSelector(state=>state.user.userInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = async (values) => {
        dispatch(userUpdateProfile(values))
        navigate('/dashboard')
        // const { http, userInfo } = AuthUser()
        // try {
        //     //const loginRes = await http.post(ApiUrl.signup)
        //     const loginRes = { data: { success: true } }
        //     if (loginRes?.data?.success || loginRes?.status === 200) {
        //         // navigate('/')
        //     }
        // } catch (error) {
        //     // navigate('/signup')
        // }
    }
    const initialValues = userInfo
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
       // validationSchema: signUpSchema,
        onSubmit: onSubmit,
    })
  
return(
    <>
        <Dashboard/>
        <>
               <div className='login-con'>
                    <div>
                    <div className='w-25'><FontAwesomeIcon icon={faUserEdit} className="m-2" onClick={()=>setInputDisable(!inputDisable)} /></div>
                        <form onSubmit={handleSubmit}>
                       
                            <div className="form-group w-100 m-2">
                                <input type="text"
                                    disabled={inputDisable}
                                    className="form-control"
                                    name="username"
                                    value={values.username}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <small id="emailHelp" className="form-text text-danger">{touched.fullName ? errors?.fullName : ''}</small>
                            </div>
                            <div className="form-group w-100 m-2">
                                <input
                                    type="email"
                                    disabled={inputDisable}
                                    class="form-control"
                                    name="email"
                                    value={values.email}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <small id="emailHelp" className="form-text text-danger">{touched.email ? errors?.email : ''}</small>
                            </div>
                            {!inputDisable ? <button type="submit" className="btn btn-primary w-100 m-2">Update Profile</button> : <></>}  
                        </form>
                    </div>
                </div>
        </>
    </>
)
}

export default Profile;