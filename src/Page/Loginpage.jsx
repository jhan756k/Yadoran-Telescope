import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../Style/Loginpage.css";

const Loginpage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // useEffect is used when id value is changed
    console.log(id); // codes for testing
  }, [id]);

  useEffect(() => {
    // useEffect is used when password value is changed
    console.log(password); // codes for testing
  }, [password]);

  const onClickSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/api/auth/login", {
        id: id,
        password: password,
      })
      .then((res) => {
        console.log(res);
        // if status code is 200,
        if (res.status === 200) {
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
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
              setId(e.target.value);
              console.log(id);
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
