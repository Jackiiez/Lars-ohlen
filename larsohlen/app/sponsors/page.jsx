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
    <>
        <div className='cards'>
            <h2 className='sponsore-heading'>Mine stolte sponsorer!</h2>

         
            <img className='side-img' src='/path/to/your/left-image.jpg' alt='Left Side Image' />

            {cards.map((card, index) => (
                <div key={index} className="card__div">
                    <div className="card">
                        <h3 className='cardtitle'>{card.name}</h3>
                        <p className='cardtitle'>{card.text}</p>
                        <Link href={card.link}>
                            <img className='placeholder' src={card.img} alt={`${card.name} Image`} />
                        </Link>
                        <p className='cardtext'>{card.facebook ? `Follow on Facebook: ${card.facebook}` : 'No Facebook link available.'}</p>
                        <p className='cardtext'>{card.link}</p>
                    </div>
                </div>
            ))}

          
            <img className='side-img-right' src='/path/to/your/right-image.jpg' alt='Right Side Image' />
        </div>
    </>
);



};

