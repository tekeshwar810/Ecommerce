import { useSelector,useDispatch } from 'react-redux';
import { userLoginInfo } from '../Redux';
import { Link } from 'react-router-dom';
const Dashboard = ()=>{
    const userInfo = useSelector(state=>state.user.userInfo)
    useDispatch(userLoginInfo(userInfo))
return(
    <>
    <center><h2>Welcome {userInfo?.username}</h2></center>
    <ul className='navBar'>
        <ol><Link to='/dashboard'>Dashboard</Link></ol>
        <ol><Link to='/profile'>Profile</Link></ol>
    </ul>
    </>
)
}

export default Dashboard;