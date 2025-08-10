
import React from 'react';

const Video = ({ src, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <video controls width="500">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </>
  );
};

export default Video;