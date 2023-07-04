import React from "react";
import "../Style/Mappage.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Mappage = () => {
  const onMapClick = (placeName, num) => {
    for (let x = 1; x <= 12; x += 1) {
      document.getElementsByClassName("map" + x)[0].style.backgroundColor =
        "transparent";
    }
    document.getElementsByClassName("maptit")[0].innerHTML = placeName;
    document.getElementsByClassName("map" + num)[0].style.backgroundColor =
      "rgba(255, 255, 255, 0.5)";
  };

  return (
    <div>
      <Navbar />
      <div className="mapfull">
        <div className="mapcont">
          <img src="images/kmla.png" alt="" className="kmlamap" />
          <button
            className="map1"
            onClick={() => {
              onMapClick("덕고관", 1);
            }}
          >
            🚩
          </button>
          <button
            className="map2"
            onClick={() => {
              onMapClick("영어교육관", 2);
            }}
          >
            🚩
          </button>
          <button
            className="map3"
            onClick={() => {
              onMapClick("충무관", 3);
            }}
          >
            🚩
          </button>
          <button
            className="map4"
            onClick={() => {
              onMapClick("다산관", 4);
            }}
          >
            🚩
          </button>
          <button
            className="map5"
            onClick={() => {
              onMapClick("민족교육관", 5);
            }}
          >
            🚩
          </button>
          <button
            className="map6"
            onClick={() => {
              onMapClick("국궁장", 6);
            }}
          >
            🚩
          </button>
          <button
            className="map7"
            onClick={() => {
              onMapClick("운동장", 7);
            }}
          >
            🚩
          </button>
          <button
            className="map8"
            onClick={() => {
              onMapClick("창의관", 8);
            }}
          >
            🚩
          </button>
          <button
            className="map9"
            onClick={() => {
              onMapClick("체육관", 9);
            }}
          >
            🚩
          </button>
          <button
            className="map10"
            onClick={() => {
              onMapClick("소사관", 10);
            }}
          >
            🚩
          </button>
          <button
            className="map11"
            onClick={() => {
              onMapClick("가정관", 11);
            }}
          >
            🚩
          </button>
          <button
            className="map12"
            onClick={() => {
              onMapClick("골프장", 12);
            }}
          >
            🚩
          </button>
        </div>
      </div>

      <div className="mapexp">
        <div className="maptit"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Mappage;
