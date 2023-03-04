import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import '../Style/Loginpage.css';

const Loginpage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // 임시 로그인 코드
        // 백엔드 연동하기
        if (e.target.user.value === 'jhan756k' && e.target.pass.value === 'pass') {
            alert('로그인 성공');
            window.location.href = '/';
        }
        else {
            alert('로그인 실패');
        }
    } 

    return (
        <div className='logindiv'>
        <Navbar/>
            <div className="login-form">
            <h1 className='head'>로그인</h1>

            <form onSubmit={handleSubmit} id="loginform">
                <input type="text" placeholder='아이디' className='inp' id='user'/>
                <input type="password" placeholder='비밀번호' className='inp' id='pass'/>
            </form>

            <div className="enter">
                <button className="login-button" type="submit" form='loginform'>로그인</button>
            </div>

            <a href="/register" className="create-account">계정 만들기</a>
            </div> 
        <Footer />
        </div>
    );
};

export default Loginpage;