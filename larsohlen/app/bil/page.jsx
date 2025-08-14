"use client";
import React, { useEffect, useRef, useState } from 'react';
import Lightbox from '../components/lightbox';
export default function Bil() {
       const cardRefs = useRef([]);
        const [lightboxImages, setLightboxImages] = useState([]);
        const [isLightboxOpen, setLightboxOpen] = useState(false);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  
  
  
  
  
        const openLightbox = (images, index) => {
          setLightboxImages(images);
          setCurrentImageIndex(index);
          setLightboxOpen(true);
        };
      
        const closeLightbox = () => {
          setLightboxOpen(false);
        };
  return (<>
<section>
    <h1 className="sponsore-heading">Alle mine sponsorer på min bil</h1>
    <p className="intro-text">Jeg er super glad for Peugeot. Bilen er miljøvenlig og har et flot design med masser af plads.
Den er perfekt til både hverdag, træningsture, samt turneringer i både Danmark og hele Europa!</p>
<p className="intro-text">Select sport 1947 ønsker ikke reklamer på biler, de er dog en kæmpe spiller for mine makkere og mig i beklædning, samt villige sponsorer af præmier til vores podier til de 5 afdelinger
   af Nordjyske Mesterskaber.</p>
<div className='side-img-div'>
            <img className='side-img' src='bilet.jpg' alt='Left Side Image' onClick={() => openLightbox(['boget.jpg'], 0)} />
             <img className='side-img' src='biltre.jpg' alt='Right Side Image' onClick={() => openLightbox(['boget.jpg'], 0)} /> <img className='side-img' src='bilto.jpg' alt='Right Side Image' onClick={() => openLightbox(['boget.jpg'], 0)} />
        </div>
        <div className='side-img-div'>
            <img className='side-img' src='bilfem.jpg' alt='Left Side Image'onClick={() => openLightbox(['boget.jpg'], 0)} />
             <img className='side-img' src='bilseks.jpg' alt='Right Side Image' onClick={() => openLightbox(['boget.jpg'], 0)} /> <img className='side-img' src='bilsyv.jpg' alt='Right Side Image'onClick={() => openLightbox(['boget.jpg'], 0)} />
              <img className='side-img' src='bilotte.jpg' alt='Right Side Image'onClick={() => openLightbox(['boget.jpg'], 0)} />
        </div>
</section>
             <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} /></>
  );
};


