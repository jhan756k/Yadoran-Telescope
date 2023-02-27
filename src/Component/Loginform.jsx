import React from 'react';
import "../Style/Loginform.css";

const Loginform = () => {
    return (
        <div className="login-form">
            <h1 className='head'>로그인</h1>
            <form>
                <input type="text" placeholder='아이디' className='inp'/>
                <input type="password" placeholder='비밀번호' className='inp'/>
            </form>
            <div className="enter">
                <button className="login-button" onClick={() => (alert("TBD"))}>로그인</button>
            </div>
            <a href="/register" className="create-account">계정 만들기</a>
        </div> 
    );
};

export default Loginform;