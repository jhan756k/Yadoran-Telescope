import React from 'react';
import Navbar from '../Component/Navbar';
import Card from '../Component/Card';
import Footer from '../Component/Footer';
import '../Style/Homepage.css'

const Homepage = () => {
    return (
        <div className='ent'>
            <Navbar />
            <div className="carditems">
                {/* 사진크기 248 376 */}
                <Card idea='민사고의 소화기 위치' img='images/map.jpg' link='/eprod'/>
                <Card idea='화재 감지 현황' img='images/cctv.png' link='/sensor'/>
                <Card idea='프로젝트 개요' img='images/doc.png' link='/about'/>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;