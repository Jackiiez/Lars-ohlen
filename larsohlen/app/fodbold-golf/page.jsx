"use client";
import Link from 'next/link';
import Lightbox from '../components/lightbox';
import { useRef, useState } from 'react';

export default function Fodboldgolf() {
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
    <div className="fodboldgolf-container">
      <h2>Fodboldgolferen LAS ⚽️⛳️🕳</h2>
      <article>
        <div className='mails'>
          <p>kildedalfg@gmail.com</p>
          <p>frederikssund.fodboldgolf.klub@gmail.com</p>
        </div>
<h2 className='placeringer-heading'>MINE BEDSTE PLACERINGER</h2>
        <p className='placeringer'>
          • Verdensmester i 55+<br />
          • 40 podier🏆<br />
          • 🥇19 stk. 🥈8 stk. 🥉13 stk.<br />
          • Vigtigste titler:<br />
          • 🏆Verdensmester i single i 55 + i 2023<br />
          • 🇫🇷 Frankrig Open i single overall i 2024<br />
          • Vandt med 12 skud – største internationale sejr i 6 år!<br />
          • 🇪🇸 Spanien Open i herredouble i 2018 og 2021<br />
          • 🇫🇮 Finland Open i herredouble i 2019<br />
          • 🇩🇰 Danish Open i herredouble 2024<br />
          • Spillet i alt 74 anlæg med mindst 18 huller<br />
          • Nærmer mig at have spillet i alt 100 baner med 18 huller<br />
          • Jeg har måske spillet aller flest baner af alle i hele verden ifølge de ”erfarne”<br />
          • Verdensrangliste højdepunkter:<br />
          • 55+ nummer 1 i verden<br />
          • Herredouble nummer 2 i verden<br />
          • Herresingle nummer 7 i verden<br />
          • Alias udover LAS<br />
          • THE GRUMPHY OLD MAN😡<br />
          • alias WORLD CHAMPION 55+<br />
          • Old Boys Football golf ⚽️⛳️🕳️<br />
          • Lars OHLEN🇩🇰
        </p>

        <p>
          * Jeg har spillet 74 anlæg med mindst 18 huller ⚽️⛳️🕳<br />
          * og snart 100 baner i alt med 18 huller ⚽️⛳️🕳<br />
          * sandsynligvis den i verden, der har spillet allerflest ⚽️⛳️🕳
        </p>

        <img src="filler.jpg" alt="" onClick={() => openLightbox(['bog3.jpg'], 0)} />

        <p>
          * En af nye bedste vennerne Thomas Skov Rasmussen:<br />
          * hjælper mig med at arrangere EM i Fodboldgolf<br />
          * laver den vildeste "artikel" om international Fodboldgolf
        </p>

        <img src="ven.jpg" alt="" onClick={() => openLightbox(['bog3.jpg'], 0)} />

        <div>
          <p>Med indunder Ørsted Outdoor - måske du har lagt dem over på Sponsorsiden nu, værs'go:</p>
          <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zjsTWtdqYKhSew6ryrUjwyVvAc5GND3ho3XYUEKULaEgFGYypU9irEWNg1aEtRJ4l?rdid=qfmmx32NNGgoifEP#"}>
            <img src="fodboldcamp.jpg" alt="" onClick={() => openLightbox(['bog3.jpg'], 0)} />
          </Link>
        </div>

        <div>
          <p>Sparke-træning den jeg skrev om med Fitness<br />
            * Træning af de lange spark
          </p>
          <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=VjHbV4FBJK3DdrHc#"}>
            <img src="sparke.jpg" alt="" onClick={() => openLightbox(['bog3.jpg'], 0)} />
          </Link>
        </div>

        <div>
          <p>* HIO (Hole In One) 🏆<br />
            * Fodboldgolf FÆNGSLET Horsens ⚽️⛳️🕳<br />
            * Stærk sidevind 🌬
          </p>
          <Link href={"https://www.facebook.com/reel/1293610341722231?rdid=TQ9nv2PMkyOGUYxE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1CRTxkKSeW%2F#"}>
            <img src="hoi.jpg" alt="" onClick={() => openLightbox(['bog3.jpg'], 0)} />
          </Link>
        </div>
      </article>
             <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </div>
  );
}
