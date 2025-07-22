"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Featured() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/sponsore.json')
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
        <div className='cards'>
          <h2>Mine Stolte Sponsore!</h2>
            {cards.map((card, index) => (
                <div className="card" key={index}><h3 className='cardtitle'>{card.name}</h3>
                   
                    <div className="card__div">
                        <Link href={card.link} >
                       
                    <img className='placeholder' src={card.img} alt={`${card.name} Image`} /></Link>
                        <p className='cardtext'>{card.facebook ? `Follow on Facebook: ${card.facebook}` : 'No Facebook link available.'}</p>
                        <p className='cardtext'>{card.link}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

