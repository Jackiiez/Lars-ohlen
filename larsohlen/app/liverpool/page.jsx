"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
export default function Liverpool() {





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
  return (
    <>
      <section className='fif-section'>
        <div className='fif-info-div'> <Link className='intro-text' href={""}><h1 className='sponsore-heading'>Liverpool FC</h1></Link>
          <Link className='intro-text' href={""}>


            <img className='fif-logo' src="liverpool.png" alt="" /></Link>
          {/* <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
          <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
          <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p> */}


          <img className='klubhus' src="anfield.jpg" alt="" />
        </div>
        <div className="comming-soon-container">


          <div className="movies-grid slider">
            {cards.map(card => (
              <div key={card.id} className="movie-card">

                <img src={card.img} alt={card.name} />

                <div className="movie-info">
                  <h3>{card.name}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      <div ref={setCardRef(0)} data-index={0} className={`fif-content-div movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
        <hr />


        <h2 className='posts-heading'>På tur til Anfield i England ⚽️🏆🥇</h2>
        <Link href={"https://www.facebook.com/story.php?story_fbid=2684811084914630&id=100001572951936&mibextid=wwXIfr&rdid=vPEVQmJYgmPgZTgR#"}>
          Klik her eller på billedet for at gå vidre til Postet</Link>
        <Link href={"https://www.facebook.com/story.php?story_fbid=2684811084914630&id=100001572951936&mibextid=wwXIfr&rdid=vPEVQmJYgmPgZTgR#"}>
          <img className='posts-img' src="ynwa.jpg" alt="" />
        </Link><p className='posts-text'>Y N W A - SÅ ER VI LANDET ❤️❤️❤️❤️⚽️⚽️⚽️⚽️🇬🇧🇬🇧🇬🇧🇬🇧
          PÅ TUR MED SKOV SNEGLEN 🐌🐌🐌🐌 ER DET STADIG MOVEMBER ❓❓❓❓
          COME ON “ THE REDS ❤️🔴❤️🔴❤️🔴❤️🔴 4 - 0 🙏🏻🙏🏻🙏🏻🙏🏻⚽️⚽️⚽️⚽️ 🙏🏻🙏🏻🙏🏻🙏🏻JA TAK ⚽️⚽️⚽️⚽️</p>

      </div>
    </>

  );
};

