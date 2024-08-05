import React from 'react'
import video from '/video_transdigitalcoop.mp4';
import '../../css/video.css';

const Video = () => {
  return (
    <div className="video-container">
      <h2>¿Quienes somos?</h2>
      <video src={video} controls>
        <source src="https://youtu.be/JdF8NPlXpKI" type="video/mp4"/>
      </video>
      <a href="/nosotros">Conoce más aquí</a>
    </div>
  )
}

export default Video