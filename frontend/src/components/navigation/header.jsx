import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router'
import SideNavigation from './sideNavigation';

import { clearNotifications } from '../../store/reducers/notifications'
import { signOut } from '../../store/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { setLayout } from '../../store/reducers/site';
import { showToast } from '../../utils/tools'

const Header = () => {
    const users = useSelector(state=>state.users)
    const notifications = useSelector(state=>state.notifications);
    const site = useSelector(state=>state.site)
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation()
    
    useEffect(()=>{
        /// localhost/dashboard/articles
        let pathname =location.pathname.split('/');
        if(pathname[1] === 'dashboard'){
            dispatch(setLayout('dash_layout'))
        } else {
            dispatch(setLayout(''))
        }

    },[location.pathname,dispatch])



    useEffect(()=>{
        let { global } = notifications;
        if(notifications && global.error){
            const msg = global.msg ? global.msg : 'Error';
            showToast('ERROR',msg)
            dispatch(clearNotifications())
        }
        if(notifications && global.success){
            const msg = global.msg ? global.msg : 'Good !!';
            showToast('SUCCESS',msg)
            dispatch(clearNotifications())
        }
    },[notifications])

    const signOutUser = () => {
        dispatch(signOut());
        navigate('/')
    }


    return(
        <>
            <nav className={`navbar fixed-top ${site.layout}`}>
                <Link to="/" className='navbar-brand d-flex align-items-center fredoka_ff'>
                    Flickbase
                </Link>
                <SideNavigation users={users} signOutUser={signOutUser}/>
            </nav>
        </>
    )
}

export default Header;