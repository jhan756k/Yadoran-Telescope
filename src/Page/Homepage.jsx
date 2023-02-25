import React from 'react';
import Navbar from '../Component/Navbar';
import Card from '../Component/Card';
import Footer from '../Component/Footer';
import '../Style/Homepage.css'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="carditems">
                <Card idea='전력 생산 현황' img='images/lightpanel.png' link='/eprod'/>
                <Card idea='센서 감지 현황' img='images/cctv.png' link='/sensor'/>
                <Card idea='프로젝트 개요' img='images/doc.png' link='/about'/>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;