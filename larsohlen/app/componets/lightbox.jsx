import { useState } from 'react';
import '../style/lightbox.scss';

const Lightbox = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const handleNext = () => {
    console.log("Next button clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    console.log("Previous button clicked");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="overlay">
      <div className="lightbox">
        <button className="close" onClick={onClose}>✖</button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="image" />
      </div>
    </div>
  );
};

export default Lightbox;
