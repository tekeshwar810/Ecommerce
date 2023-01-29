import React,{ useState } from "react";
import { useFormik } from 'formik';
import {  Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import AuthUser from '../Http/Axios';
import ApiUrl from '../Http/ApiUrls';
import { userLoginInfo } from '../Redux';

const Login = () => {
    const [number,setNumber] = useState(1)
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.user.userInfo)
    const { http } = AuthUser()
    const navigate = useNavigate()
    const onSubmit = async (values) => {
        console.log(values)
        try {
            const loginRes = await http.post(ApiUrl.login,values)
            if (loginRes?.data?.success || loginRes?.status === 200) {
                navigate('/dashboard')
                dispatch(userLoginInfo(loginRes?.data?.data))
                console.log('updated state',userInfo)
            }
        }catch(error){
            navigate('/signup')
        }
    }

    const initialValues = { email: '', password: '' }
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        // validationSchema: signUpSchema,
        onSubmit: onSubmit,
    })

    return (
        <>
            <div className='login-con'>
                <h1>Login</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group w-100 m-2">
                                <input
                                    type="email"
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
                            <div className="form-group w-100  m-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={values.password}
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <small id="emailHelp" className="form-text text-danger">{touched.password ? errors?.password : ''}</small>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 m-2">Login</button>
                            <div className='login-note'>
                            <small id="emailHelp" className="form-text text-muted  m-2"> If you have not account <a href='/signup'> <Link to='/signup'>Click Here!</Link></a></small>
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;