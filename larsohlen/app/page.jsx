"use client";
import { useState, useEffect, useRef } from 'react';
import Lightbox from './components/lightbox';
import Link from 'next/link';


export default function Home() {

  const [visibleCards, setVisibleCards] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);



  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/videoer.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);

        if (Array.isArray(data.sponsors)) {
          setCards(data.sponsors);
        } else {
          console.error('Sponsors is not a valid array:', data.sponsors);
          setCards([]);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

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
        <h1>Lars Ohlen {"(LAS"}</h1>
        <h1>the double trouble{")"}</h1>
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
                <img className="main-image" src="vinderet.jpg" alt="Main Image" onClick={() => openLightbox(['vinderet.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="vinderto.jpg" alt="Champagne" onClick={() => openLightbox(['vinderto.jpg'], 0)} />
                <img className="kærlighed" src="vinder3.jpg" alt="Kærlighed" onClick={() => openLightbox(['vinder3.jpg'], 0)} />
              </div>
            </div>
            <div className="image-container">
              <div className="main-image-container">
                <img className="main-image" src="DMvinder.jpg" alt="Main Image" onClick={() => openLightbox(['DMvinder.jpg'], 0)} />
              </div>
              <div className="grid-images">
                <img className="champagne" src="champange.jpg" alt="Champagne" onClick={() => openLightbox(['champange.jpg'], 0)} />
                <img className="kærlighed" src="kærlighed.jpg" alt="Kærlighed" onClick={() => openLightbox(['kærlighed.jpg'], 0)} />
              </div>
            </div>

          </div>




  <hr className="divider" />

   <div className="coming-soon-container">
    <div className="movies-grid slider">
        <div className="movie-card">
            <video controls width="500">
                <source src="fodbold.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 1</h3>
                <p>Watch this amazing football video!</p>
            </div>
        </div>
        <div className="movie-card">
            <video controls width="500">
                <source src="vip.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 2</h3>
                <p>Enjoy the highlights of the match!</p>
            </div>
        </div>
        
        <div className="movie-card">
            <video controls width="500">
                <source src="video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 3</h3>
                <p>Check out this fantastic goal!</p>
            </div>
        </div>
        <div className="movie-card">
            <video controls width="500">
                <source src="fodbold.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 4</h3>
                <p>Relive the best moments of the game!</p>
            </div>
        </div>
        <div className="movie-card">
            <video controls width="500">
                <source src="fodbold.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 5</h3>
                <p>Witness the thrilling finale!</p>
            </div>
        </div>
        <div className="movie-card">
            <video controls width="500">
                <source src="fodbold.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 6</h3>
                <p>Catch the excitement of the tournament!</p>
            </div>
        </div>
           <div className="movie-card">
            <video controls width="500">
                <source src="clean.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="movie-info">
                <h3>Football Video 6</h3>
                <p>Catch the excitement of the tournament!</p>
            </div>
        </div>
    </div>
</div>










          {/* <div className="comming-soon-container">
            
            <h2>Lars video-highlights</h2>
            <div className="movies-grid">

              <div className="movie-card">

                <video controls width="500">
                  <source src="fodbold.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="movie-info">
                  <h3>hej</h3>
                  <p>hej</p>
                </div>
              </div>

            </div>


          </div>
          <div className="movie-card">

            <video controls width="500">
              <source src="fodbold.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="movie-info">
              <h3>hej</h3>
              <p>hej</p>
            </div>
          </div> */}


        </section>
      </div>

      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
}
