"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';




export default function Salg() {
      const [cards, setCards] = useState([]);
  
      useEffect(() => {
          fetch('/salg.json')
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


   
        <div className='cards'>
          <h1 className='sponsore-heading'>Hej og velkommen til min salgs-side</h1>
            <h2 className='sponsore-heading'>Føl dig endelig velkommen til at kigge på nogen af de artikler, som jeg har til salg 😀</h2>

   

            {cards.map((card, index) => (
                <div key={index} className="card__div">
                    <div className="card">
                        <h3 className='cardtitle'>{card.name}</h3>
                        <p className='cardtitle'>{card.text}</p>



                        <Link href={card.link}>
                            <img className='placeholder' src={card.img} alt={`${card.name} Image`} />
                        </Link>


                        <p className='cardtext'>{card.facebook ? `Kontakt mig på min facebook/messenger  : ${card.facebook}` : 'No Facebook link available.'}</p>
                        <p className='cardtext'>{card.link}</p>
                    </div>
                </div>
            ))}


          
           
        </div>
    
  </>
  );
}