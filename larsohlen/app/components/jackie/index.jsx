import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src }) => {
  return (
    <video controls width="500">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

// Add prop types
Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;

