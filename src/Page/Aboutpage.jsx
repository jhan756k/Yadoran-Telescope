import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../Style/Aboutpage.css";

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutpage">
        <h1>스마트 소화기</h1>
        <p>
          스마트 소화기는 민사고에서의 화재 발생 시 초기 진압 및 대응을 돕기
          위한 프로젝트입니다.
        </p>
        <p>2023년 1학기 융합프로젝트팀 Yadoran's Telescope</p>
        <p>
          <a href="mailto:jhan756k@gmail.com" className="names">
            한준희
          </a>
        </p>
        <p>
          <a href="mailto:@gmail.com" className="names">
            오지훈
          </a>
        </p>
        <p>
          <a href="mailto:hwankimsk7@gmail.com" className="names">
            김환
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutpage;
