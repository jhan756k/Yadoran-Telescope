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
            <button className="map1">🚩</button>
            <button className="map2">🚩</button>
            <button className="map3">🚩</button>
            <button className="map4">🚩</button>
            <button className="map5">🚩</button>
            <button className="map6">🚩</button>
            <button className="map7">🚩</button>
        </div>
      </div>

      <div className="maplinks"></div>
      <div className="mapinfo"></div>

      <Footer />
    </div>
  );
};

export default Mappage;
