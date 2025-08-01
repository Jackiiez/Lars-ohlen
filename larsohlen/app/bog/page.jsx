"use client";
import React, { useEffect, useRef, useState } from 'react';
import Lightbox from '../components/lightbox';
import Link from "next/link";

export default function Bog() {
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
    return (
        <>
            <section className="section">
                <div className="content">
                    <h1 className="title">Jeg er med i en bog!</h1>
                    <h2 className="subtitle">“111 steder ved Roskilde Fjord som du skal se”</h2>
                    <div>
                        <Link href="https://www.bog-ide.dk/produkt/4798018/heidi-fjelstrup-111-steder-ved-roskilde-fjord-som-du-skal-se-haeftet/3154945?gad_source=1&gad_campaignid=17339713879&gbraid=0AAAAADkSqof3EdJw58E_4aovmFO4GMvhl&gclid=CjwKCAjwv5zEBhBwEiwAOg2YKN_ACLkDttpe2KHCIU4Fd_eJcs4cGrlqv5mAab0QzGVl8nYnSTsAoBoCnswQAvD_BwE&gclsrc=aw.ds" className="navbar-link">
                            <p>Link til bogen</p>
                        </Link>
                        <p className="note">*ER IKKE SPONSERET*</p>
                    </div>
                </div>
                <div className="image-grid">
                    <img src="boget.jpg" alt="" onClick={() => openLightbox(['boget.jpg'], 0)} />
                    <img src="bogto.jpg" alt=""onClick={() => openLightbox(['bogto.jpg'], 0)} />
                    <img src="bogfire.jpg" alt="" onClick={() => openLightbox(['bogfire.jpg'], 0)}/>
                    <img src="bogfem.jpg" alt=""onClick={() => openLightbox(['bogfem.jpg'], 0)} />
                    <img src="bog3.jpg" alt=""  onClick={() => openLightbox(['bog3.jpg'], 0)} />   
                 
                    
                </div>
            </section>
             <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
        </>
    );
}
