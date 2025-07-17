"use client";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

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

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };









  return (
    <>


      <div className="hero">
        <h1>Lars Ohlen</h1>
      </div>

      <div className="hero-content">
        <section ref={setCardRef(0)}
          data-index={0}
          className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}   >
          <div className="about">
            <h2 className="about__heading">småt om mig</h2>
            <p>Dedikeret Fodboldgolfer med øgenavnet LAS</p>
            <p>Tidligere Maraton-løber og badmintonspiller</p>
            <p>Realkreditnørd med meget mere</p>
            <p>Altid klar med et godt råd om boligkøb</p>
            <p>Valg af lån i ejerbolig</p>
            <p>Godkendelse af økonomi og meget mere</p>
          </div>
          <img  src="vinder.jpg" alt="" />
        </section>
      </div>

      <div className="comming-soon-container">
        <div className="movies-grid">
          <div
            ref={setCardRef(1)}
            data-index={1}
            className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
            <img src="lars.jpg" alt="" />
            <div className="movie-info">
              <h3>Lorem, ipsum.</h3>
            </div>
          </div>

          <div
            ref={setCardRef(2)}
            data-index={2}
            className={`movie-card ${visibleCards.includes(2) ? 'visible' : ''}`}
          >
            <img src="lars.jpg" alt="" />
            <div className="movie-info">
              <h3>Lorem, ipsum.</h3>
            </div>
          </div>

          <div ref={setCardRef(3)}
            data-index={3}
            className={`movie-card ${visibleCards.includes(3) ? 'visible' : ''}`}
          >
            <img src="lars.jpg" alt="" />
            <div className="movie-info">
              <h3>Lorem, ipsum.</h3>
            </div>
          </div>

          <div
            ref={setCardRef(4)}
            data-index={4}
            className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}
          >
            <img src="lars.jpg" alt="" />
            <div className="movie-info">
              <h3>Lorem, ipsum.</h3>
            </div>

          </div>
          <div
            ref={setCardRef(5)}
            data-index={5}
            className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}
          >
            <img src="lars.jpg" alt="" />
            <div className="movie-info">
              <h3>Lorem, ipsum.</h3>
            </div>

          </div>
          <div
            ref={setCardRef(6)}
            data-index={6}
            className={`movie-card ${visibleCards.includes(6) ? 'visible' : ''}`}
          >
            <img src="lars.jpg" alt="" />
            <div className="movie-info">
              <h3>Lorem, ipsum.</h3>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}