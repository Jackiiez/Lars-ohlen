"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Liverpool() {
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
        <div className='fif-info-div'> <Link className='intro-text' href={""}><h1 className='sponsore-heading'>F.C Barcalona </h1></Link>
          <Link className='intro-text' href={""}>


            <img className='fif-logo' src="barcalona.png" alt="" /></Link>
          <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
          <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
          <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p>


          <img className='klubhus' src="barcalona-stadium.jpg" alt="" />
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
          <div className='fif-content-div'>
            <hr />


            <h2 className='posts-heading'>Barca {"<3"}⚽️🏆🥇</h2>
            <Link href={"https://www.facebook.com/photo.php?fbid=9831256513603349&set=pb.100001572951936.-2207520000&type=3"}>
              Klik her eller på billedet for at gå vidre til Postet</Link>
            <Link href={"https://www.facebook.com/photo.php?fbid=9831256513603349&set=pb.100001572951936.-2207520000&type=3"}>
              <img className='posts-img' src="barca.jpg" alt="" />
            </Link><p className='posts-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti necessitatibus cum omnis dicta quibusdam! Reiciendis dolorum dolore, quasi debitis soluta eligendi sint necessitatibus, accusamus tempora rerum aperiam excepturi quia atque!</p>

          </div></div>
      </section>
    </>

  );
};

