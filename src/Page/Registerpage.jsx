import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import '../Style/Registerpage.css';

const Registerpage = () => {
    const [registerId, setregisterId] = useState("");
    const [registerPass, setregisterPass] = useState("");

    const submitClick = (e) => {
        e.preventDefault();
        axios. 
            post("http://localhost:8000/api/auth/register", {
                username: registerId,
                password: registerPass,
            })
            .then((res) => {
                if (res.status === 200) {
                    alert("가입 완료");
                    window.location.href = "/login";
                } else {
                    alert("회원가입 에러");
                }
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }

    return (
        <div>
        <Navbar />
            <div className="register-form">
                <h1 className="head">회원가입</h1>
                <form id="registerform" onSubmit={submitClick}>
                    <input type="text" placeholder="아이디" className="inp" id="user" onChange={(e) => setregisterId(e.target.value)}/>
                    <input type="password" placeholder="비밀번호" className="inp" id="pass" onChange={(e) => setregisterPass(e.target.value)}/>
                </form>
                <div className="enter">
                    <button className="register-button" type="submit" form="registerform">
                        가입하기
                    </button>
                </div>
            </div>
        <Footer />
        </div>
    );
};

export default Registerpage;