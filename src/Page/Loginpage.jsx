import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../Style/Loginpage.css";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        } else {
          alert("로그인 에러");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="logindiv">
      <Navbar />
      <div className="login-form">
        <h1 className="head">로그인</h1>

        <form onSubmit={onClickSubmit} id="loginform">
          <input
            type="text"
            placeholder="아이디"
            className="inp"
            id="user"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="inp"
            id="pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>

        <div className="enter">
          <button className="login-button" type="submit" form="loginform">
            로그인
          </button>
        </div>

        <a href="/register" className="create-account">
          계정 만들기
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Loginpage;
