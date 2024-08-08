import React from "react";
import "../../css/video.css";

const Video = () => {
  return (
    <div className="video-container">
      <h2>¿Quienes somos?</h2>
      <iframe
        src="https://www.youtube.com/embed/lpiAgSoD-P8?si=RI39FYG__6_ee_V5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen="true"
      ></iframe>
      <a href="/nosotros">Conoce más aquí</a>
    </div>
  );
};

export default Video;
