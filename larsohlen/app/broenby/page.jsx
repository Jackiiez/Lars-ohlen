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
                <div className='fif-info-div'> <Link className='intro-text' href={""}><h1 className='sponsore-heading'>Brøndby IF</h1></Link>
                         <Link className='intro-text' href={""}>
                    
                   
                    <img className='fif-logo' src="bif.png" alt="" /></Link>
                    <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
                    <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
                    <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p>


                    <img className='klubhus' src="bif-stadion.jpg" alt="" />
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
          
                    <h2 className='posts-heading'>Brøndby stunder ⚽️🏆🥇</h2>
 <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0JmziuTQDRG14dr3kuQP8iLTTicF6APGazihP3b469Z2D9tLp2qpH8TCWzEegnESFl?rdid=gFb4MW3Ed5pUWQre#"}>
                        Klik her eller på billedet for at gå vidre til Postet</Link>
                    <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0JmziuTQDRG14dr3kuQP8iLTTicF6APGazihP3b469Z2D9tLp2qpH8TCWzEegnESFl?rdid=gFb4MW3Ed5pUWQre#"}>
                        <img className='posts-img' src="bif-tur.jpg" alt="" />
                    </Link><p className='posts-text'>Life is good ❤️☀️💙💛⚽️ hov Mr Vibæk og Emil Stabil .....</p>
                   
                </div></div>
            </section>
        </>

    );
};

