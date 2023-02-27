import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Loginform from '../Component/Loginform';

const Loginpage = () => {
    return (
        <div className='logindiv'>
            <Navbar />
            <Loginform />
            <Footer />
        </div>
    );
};

export default Loginpage;