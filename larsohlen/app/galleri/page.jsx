"use client";
import React, { useEffect, useRef, useState } from 'react';
import Lightbox from '../components/lightbox';

export default function Galleri() {
  const [sections, setGalleryItems] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    fetch('/gallery.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setGalleryItems(data.sections || []);
      })
      .catch(error => {
        console.error('Error fetching gallery items:', error);
      });
  }, []);

  return (
    <>
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        {Array.isArray(sections) && sections.length > 0 ? (
          sections.map(section => (
            <div key={section.heading} className="gallery-section">


              
              <h2 className="section-heading">{section.heading}</h2>
              <div className="gallery">

                {section.galleryItems.map(item => (
                  <div key={item.id} className="gallery-item" ref={setCardRef(item.id)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-image"
                      onClick={() => openLightbox([item.image], 0)}
                    />
                    <div className="gallery-info">
                      <h3 className="gallery-title">{item.title}</h3>
                      <p className="gallery-description">{item.description}</p>
                   
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No gallery items available.</p>
        )}
        <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
      </div>
    </>
  );
}
