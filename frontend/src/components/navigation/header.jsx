import { Link, useNavigate, useLocation } from 'react-router'
import SideNavigation from './sideNavigation';

const Header = () => {
    return(
        <>
            <nav className='navbar fixed-top'>
                <Link to="/" className='navbar-brand d-flex align-items-center fredoka_ff'>
                    Flickbase
                </Link>
                <SideNavigation/>
            </nav>
        </>
    )
}

export default Header;