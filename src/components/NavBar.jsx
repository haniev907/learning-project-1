import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <ul className='nav bg-primary nav-bar'>
            <img className='nav__img' src="https://img.icons8.com/color/344/gantt-chart.png" alt="icon" />
            <li className='nav-item ms-2'>
                <Link to='/'>Main</Link>  
            </li> 
            <li className='nav-item ms-2'>
                <Link style={{marginLeft: '62em'}} to='/Login'>Login</Link>
            </li>
            <li className='nav-item ms-2'>
                <Link to='/Users'>Users</Link>
            </li>
        </ul>
     );
}
 
export default NavBar;