import React from 'react'
import video from '/video_transdigitalcoop.mp4';
import '../../css/video.css';

const Video = () => {
  return (
    <div className="video-container">
      <h2>¿Quienes somos?</h2>
      <iframe
        src="https://www.youtube.com/embed/JdF8NPlXpKI"
        title="TransDigitalCoop Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <a href="/nosotros">Conoce más aquí</a>
    </div>
  )
}

export default Video