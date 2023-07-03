import React from "react";
import "../Style/Mappage.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Mappage = () => {
  return (
    <div>
      <Navbar />
      <div className="mapfull">
        <div className="mapcont">
          <img src="images/kmla.png" alt="" className="kmlamap" />
        </div>
      </div>
      <div className="maplinks">
        <a className="numclick">①</a>
        <a className="numclick">②</a>
        <a className="numclick">③</a>
        <a className="numclick">④</a>
        <a className="numclick">⑤</a>
        <a className="numclick">⑥</a>
        <a className="numclick">⑦</a>
        <a className="numclick">⑧</a>
        <a className="numclick">⑨</a>
        <a className="numclick">⑩</a>
        <a className="numclick">⑪</a>
        <a className="numclick">⑫</a>
      </div>

      <div className="mapinfo">
        
      </div>

      <Footer />
    </div>
  );
};

export default Mappage;
