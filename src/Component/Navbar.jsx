import React from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
    return (
        <div className='navdiv'>
            <a className='navtitle' href='/'>야도란의 망원경</a>
            <a className='navitem' href='/login'>로그인</a>
        </div>
    );
};

export default Navbar;