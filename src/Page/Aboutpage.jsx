import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import "../Style/Aboutpage.css"

const Aboutpage = () => {
    return (
        <div>
            <Navbar />
            <div className='aboutpage'>
                <h1>야도란의 망원경</h1>
                <p>야도란의 망원경은 덕고관 뒷산에서의 사고 발생을 방지하기 위한 프로젝트입니다.</p>
                <p>2023년 1학기 융합프로젝트팀 Yadoran's Telescope</p>
                <p>한준희</p>
                <p>오지훈</p>
                <p>김환</p>
            </div>
            <Footer />
        </div>
    );
};

export default Aboutpage;