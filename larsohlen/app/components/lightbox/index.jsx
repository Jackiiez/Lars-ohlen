import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import '../../style/lightbox.scss';

const Lightbox = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="overlay">
      <div className="lightbox">
        <button className="close" onClick={onClose}>✖</button>
        <img src={images[currentIndex]} alt={`Image ${setCurrentIndex + 1}`} className="image" />
      </div>
    </div>
  );
};

// Add prop types
Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;