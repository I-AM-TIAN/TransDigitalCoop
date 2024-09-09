import React from "react";
import "@justinribeiro/lite-youtube";
import "../../css/video.css";

const Video = () => {
  return (
    <div className="video-container">
      <h2 className="information">¿Quienes somos?</h2>
      <div className="video-reproductor">
        <lite-youtube videoid="lpiAgSoD-P8"></lite-youtube>
      </div>
      <a href="/nosotros">Conoce más aquí</a>
    </div>
  );
};

export default Video;
