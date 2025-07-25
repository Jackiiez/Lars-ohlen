"use client";
import { useState, useEffect, useRef } from 'react';
import Lightbox from './components/lightbox';


export default function Home() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);

  //animation on load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);




  //lightbox
  // Reference to store DOM elements for each card
const setCardRef = (index) => (el) => {
  // Assign the current element (el) to the cardRefs array at the specified index
  cardRefs.current[index] = el;
};

// Function to open the lightbox with specified images and the index of the current image
const openLightbox = (images, index) => {
  // Set the images to be displayed in the lightbox
  setLightboxImages(images);
  // Set the index of the currently displayed image
  setCurrentImageIndex(index);
  // Open the lightbox
  setLightboxOpen(true);
};

// Function to close the lightbox
const closeLightbox = () => {
  // Set the state to close the lightbox
  setLightboxOpen(false);
};

  

  return (
    <>
      <div className="hero">
        <h1>Lars Ohlen</h1>
      </div>

      <div className="hero-content">
        <section ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
          <div className="content-container">
            <div className="about">
              <h2 className="about__heading">småt om mig</h2>
              <p>Dedikeret Fodboldgolfer med øgenavnet LAS</p>
              <p>Tidligere Maraton-løber og badmintonspiller</p>
              <p>Realkreditnørd med meget mere</p>
              <p>Altid klar med et godt råd om boligkøb</p>
              <p>Valg af lån i ejerbolig</p>
              <p>Godkendelse af økonomi og meget mere</p>
            </div>
            <div className="image-container">
              <div className="main-image-container">
                <img className="main-image" src="vinder.jpg" alt="Main Image" onClick={() => openLightbox(['vinder.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="champange.jpg" alt="Champagne" onClick={() => openLightbox(['champange.jpg'], 0)} />
                <img className="kærlighed" src="kærlighed.jpg" alt="Kærlighed" onClick={() => openLightbox(['kærlighed.jpg'], 0)} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
}
