"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Video from '../components/jackie';
export default function Fif() {
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
                <div className='fif-info-div'> <Link className='intro-text' href={"https://www.fif-hillerod.dk/"}><h1 className='sponsore-heading'>FIF-Fodbold</h1></Link>
                    <Link className='intro-text' href={"https://www.fif-hillerod.dk/"}>


                        <img className='fif-logo' src="fif.jpg" alt="" /></Link>
                    <p className='intro-text'>Her er det hold som har en meget personlig plads i mit hjerte.</p>
                    <p className='intro-text'>Grunde til det her hold er en af mine personlige favoriter er fordi min søn og hans bedste venner spiller sammen på holdet</p>
                    <p className='intro-text'>på trods af at det bare er et hygge hold så gør det mig inderligt glad at se min søn og hans venner spille kampe selvom det udelukkende er hygge bold</p>


                    <img className='klubhus' src="klubhus.jpg" alt="" />
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
                    
                </div></div>
                 <div className='fif-content-div'>
                    <hr />
                    <h2 className='posts-heading'>Gutterne i FIF fejre første sæson sejr ⚽️🏆🥇</h2>
                    <Video src="fodbold.mp4" 
       />
                   <p className='posts-text'>Jeg ved godt, at Jackie er god til at score damer eller VAR, der er vist en meget sød kæreste nu 💃🫶
                        Jeg ved godt, at Jackie er god til at lave insta .....
                        MEN al den snak om ALLE de mål Jackie scorer for FIF ⚽⚽⚽⚽⚽ var jeg træt at høre om hele tiden.
                        "Lars, Lars du kom for sent, jeg har scoret 2 mål og lavet 1 assist i første halvleg ..... men se første video SÅDAN JACKS 💪⚽✌️
                        og Faiz du er en unik fighter, video 2, stormer frem, ruller rundt, tilbageløb og piver aldrig 🙏</p>

                </div>
                <div className='fif-content-div'>
                    <hr />
                    <h2 className='posts-heading'>Jackie scorer mål for FIF ⚽️🏆🥇</h2>
                    <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid036JFx7vySFU2jXfMM6sXqyEg6XqJpL6iFYVXdt1jFJ2X1qvMBnjBEVCReEvHECB72l?rdid=hDsn2dZYwEwkOG8s#"}>
                        Klik her eller på billedet for at gå vidre til Postet</Link>
                    <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid036JFx7vySFU2jXfMM6sXqyEg6XqJpL6iFYVXdt1jFJ2X1qvMBnjBEVCReEvHECB72l?rdid=hDsn2dZYwEwkOG8s#"}>
                        <img className='posts-img' src="jackie-mål.jpg" alt="" />
                    </Link><p className='posts-text'>Jeg ved godt, at Jackie er god til at score damer eller VAR, der er vist en meget sød kæreste nu 💃🫶
                        Jeg ved godt, at Jackie er god til at lave insta .....
                        MEN al den snak om ALLE de mål Jackie scorer for FIF ⚽⚽⚽⚽⚽ var jeg træt at høre om hele tiden.
                        "Lars, Lars du kom for sent, jeg har scoret 2 mål og lavet 1 assist i første halvleg ..... men se første video SÅDAN JACKS 💪⚽✌️
                        og Faiz du er en unik fighter, video 2, stormer frem, ruller rundt, tilbageløb og piver aldrig 🙏</p>

                </div>
                  
            </section>
        </>

    );
};

