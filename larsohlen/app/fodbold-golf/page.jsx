"use client";
import Link from 'next/link';
import Lightbox from '../components/lightbox';
import { useEffect, useRef, useState } from 'react';

export default function Fodboldgolf() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);



  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);





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



  // Lightbox functions






  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <div className={`fodboldgolf-container`}>
      <h2 className='sponsore-heading'>Fodboldgolferen LAS ⚽️⛳️🕳</h2>
      <article>
        <div className='mails'>
          <p>kildedalfg@gmail.com</p>
          <p>frederikssund.fodboldgolf.klub@gmail.com</p>
        </div>
        <h2 className='sponsore-heading'>Mine podier🏆</h2>
        <p className='placeringer'>
          • Verdensmester i 55+<br />
          • 41 podier🏆<br />
          • 🥇19 stk. 🥈8 stk. 🥉14 stk.<br />
          • Vigtigste titler:<br />
          • 🏆Verdensmester i single i 55 + i 2023<br />
          • 🇫🇷 Frankrig Open i single overall i 2024<br />
          • Vandt med 12 skud - største internationale sejr i 6 år!<br />
          • 🇪🇸 Spanien Open i herredouble i 2018 og 2021<br />
          • 🇫🇮 Finland Open i herredouble i 2019<br />
          • 🇩🇰 Danish Open i herredouble 2024<br />
          • Spillet i alt 81 anlæg med mindst 18 huller<br />
          • Jeg har spillet præcis 100 baner med 18 huller, som vil frigiver dene hjememside ligenu<br />
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
          * Jeg har spillet 81 anlæg med mindst 18 huller ⚽️⛳️🕳<br />
          * Jeg har spillet 100 baner i alt med 18 huller ⚽️⛳️🕳<br />
          * sandsynligvis den i verden, der har spillet allerflest ⚽️⛳️🕳
        </p>




        {/* <hr className="divider" /> */}




        <div className={`fodboldgolf-grid`}>


          <div ref={setCardRef(0)} data-index={0} className={`movie-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
            <p>
              *"Swedish Open 2022 jeg er i mit livs topform, har lige vundet Czeck Open og Danish <br />
              Open i 55+ og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller. Det<br />
              kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢. To puts fra min fod - hul 1"
            </p>

            <video controls width="500">
              <source src="swedishopenvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>



          <div ref={setCardRef(1)} data-index={1} className={`movie-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
            <p>
              *"Swedish Open 2022 jeg er i mit livs topform, har lige vundet Czeck Open og Danish <br />
              Open i 55+ og her kommer Vibæk og jeg KÆMPE foran efter 9 af 36 huller. Det<br />
              kunne vi ikke tåle og spillede os af podiet 😂😂🤣😢. To puts fra min fod - hul 3"
            </p>

            <video controls width="500">
              <source src="swedishopenvideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>


          <div ref={setCardRef(2)} data-index={2} className={`movie-card ${visibleCards.includes(2) ? 'visible' : ''}`}>
            <p>
              * En af nye bedste vennerne Thomas Skov Rasmussen:<br />
              * hjælper mig med at arrangere EM i Fodboldgolf<br />
              * laver den vildeste "artikel" om international Fodboldgolf
            </p>

            <img className='fg-img' src="ven.jpg" alt="" onClick={() => openLightbox(['ven.jpg'], 0)} />
          </div>



          <div ref={setCardRef(3)} data-index={3} className={`movie-card ${visibleCards.includes(3) ? 'visible' : ''}`}>
            <p>
              "Maj 2022 andet stævne, hvor jeg også deltager i 55+.
            </p>
            <p>Jeg vinder Czeck Open 2022 foran Strandberg og Niedermeyer,</p>
            <p> som på samme bane i 2021 blev nr. 1 og 2 til VM i 55+"</p>

            <img className='fg-img' src="czec.jpg" alt="" onClick={() => openLightbox(['czec.jpg'], 0)} />
          </div>




          <div ref={setCardRef(4)} data-index={4} className={`movie-card ${visibleCards.includes(4) ? 'visible' : ''}`}>
            <p>
              "DM 2022 i Ørsted Ørredvand, nu Ørsted Outdoor. Jeg bliver nr. 4 efter at have ligget
            </p>
            <p>nr. 3 til 6 over alle 4 runder i single. Har faktisk bronzen til hul 14 i finalerunden, men </p>
            <p> 3 putter, hvor Secher sætter 1. put og så napper makker Secher bronzen"</p>

            <img className='fg-img' src="dmorrsted2022.jpg" alt="" onClick={() => openLightbox(['dmorrsted2022.jpg'], 0)} />
          </div>


          <div ref={setCardRef(5)} data-index={5} className={`movie-card ${visibleCards.includes(5) ? 'visible' : ''}`}>
            <p>
              "Juni 2022 vinder Danish Open 55+"
            </p>

            <img className='fg-img' src="danishopen2022.jpg" alt="" onClick={() => openLightbox(['danishopen2022.jpg'], 0)} />
          </div>



          <div ref={setCardRef(6)} data-index={6} className={`movie-card ${visibleCards.includes(6) ? 'visible' : ''}`}>
            <p>
              "Vintertour marts 2023 jeg vinder omspillet om bronze over makker Vibæk. Daniel og
            </p>
            <p>jeg står på samme podie som nr. 1 og 3 i Odsherred Eventen" </p>


            <img className='fg-img' src="vintertour2023.jpg" alt="" onClick={() => openLightbox(['vintertour2023.jpg'], 0)} />
          </div>

          <div ref={setCardRef(7)} data-index={7} className={`movie-card ${visibleCards.includes(7) ? 'visible' : ''}`}>
            <p>
              Resultat fra Vintertour marts 2023:
            </p>


            <img className='fg-img' src="vintertour2023-resultat.jpg" alt="" onClick={() => openLightbox(['vintertour2023-resultat.jpg'], 0)} />
          </div>


          <div ref={setCardRef(8)} data-index={8} className={`movie-card ${visibleCards.includes(8) ? 'visible' : ''}`}>
            <p>Med indunder Ørsted Outdoor - måske du har lagt dem over på Sponsorsiden nu, værs'go:</p>
            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid02zjsTWtdqYKhSew6ryrUjwyVvAc5GND3ho3XYUEKULaEgFGYypU9irEWNg1aEtRJ4l?rdid=qfmmx32NNGgoifEP#"}>
              <img className='fg-img' src="fodboldcamp.jpg" alt="" onClick={() => openLightbox(['fodboldcamp.jpg'], 0)} />
            </Link>

          </div>



          <div ref={setCardRef(9)} data-index={9} className={`movie-card ${visibleCards.includes(9) ? 'visible' : ''}`}>
            <p>Sparke-træning den jeg skrev om med Fitness<br />
              * Træning af de lange spark
            </p>
            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=VjHbV4FBJK3DdrHc#"}>
              <img className='fg-img' src="sparke.jpg" alt="" />
            </Link>
          </div>

          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>* HIO (Hole In One) 🏆<br />
              * Fodboldgolf FÆNGSLET Horsens ⚽️⛳️🕳<br />
              * Stærk sidevind 🌬
            </p>
            <Link href={"https://www.facebook.com/reel/1293610341722231?rdid=TQ9nv2PMkyOGUYxE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1CRTxkKSeW%2F#"}>
              <img className='fg-img' src="hoi.jpg" alt="" />
            </Link>
          </div>


          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Slovakiet open 2025.
              Jeg er GRUMPHY OLD MAN 😡
            </p>
            <Link href={"https://www.facebook.com/story.php?story_fbid=23991878600447903&id=100001572951936&mibextid=wwXIfr&rdid=EEVU0anFl7ndswxu#"}>
              <img className='fg-img' src="grumpyoldman.jpg" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>STØRSTE internationale sejr i 6 år - French Open 2024
            </p>
            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0c38D5K4DnCfkGu9mHDvQsxoPSnoPq9D5PZSYjx4yS9yxdRiSH1gWavu8EeP5djfel?rdid=wAe6qfyiaYKZD4n8#"}>
              <img className='fg-img' src="frenchopen-winner.jpg" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>* Fitness hos Fyssen for at styrke hele kroppen til ⚽️⛳️🕳</p>
            <p>* Trænet 3 gange om ugen siden midt oktober</p>
            <p>* Medmindre jeg er ude til turnering</p>
            <p>* Det er kedeligt, men føles samtidigt godt 🏋️‍♂️</p>
            <p>* og kroppen er bare ekstremt meget bedre</p>
            <p>* måske også fordi jeg har tabt 18 kilo siden marts</p>

            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid034jPudK2wr4fmbmQ5N2u7qKR1WkDq9HQusk867jZCMX5Cpkwc2dWR97ucDaAeZQ4Al?rdid=uWPi7BCN09ACI4nC#"}>
              <img className='fg-img' src="træner.jpg" alt="" />
            </Link>
          </div>



          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>* Træning af de lange spark</p>


            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0wzkcEptNLUMxTUuxoPhHgdobg7zPuQ5TKYKDHtjDGhgUA1E3X6pvFYDPHJZbvCE2l?rdid=1yJSHiBZ8Oy9g6Ne#"}>
              <img className='fg-img' src="sparketræning.png" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Nordjysk fodboldgolf</p>
            <p>* Niels Vendelboe har altid bakket vores sport op
              * Afholdt massevis af Nordjyske Opens
              * DM
              * været tæt på at afholde Danish Open
              * Støttet op om DFGU, da vi havde en baneejer-union
              * God mand

              https://nordjyskfodboldgolf.dk/
              nordjyskfodboldgolf.dk</p>


            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0TBBXbZGpsdVFQY4FpY3vJTyKrCaSzXL99RbQxHhZFCpmA7DDGXBexudZy1Hej5QHl?rdid=6KlKxH2Zhh1QUqib#"}>
              <img className='fg-img' src="nordjysk-logo.jpg" alt="" />
            </Link>
          </div>
          <div ref={setCardRef(10)} data-index={10} className={`movie-card ${visibleCards.includes(10) ? 'visible' : ''}`}>
            <p>Nordjysk fodboldgolf</p>
            <p>* Niels Vendelboe har altid bakket vores sport op
              * Afholdt massevis af Nordjyske Opens
              * DM
              * været tæt på at afholde Danish Open
              * Støttet op om DFGU, da vi havde en baneejer-union
              * God mand

              https://nordjyskfodboldgolf.dk/
              nordjyskfodboldgolf.dk</p>


            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0C4t1yMHDdsUUxShKaqtNaJLvbwAX8bDB8qKg3KVKs7miNKYRKR4r4x4mDzk2jNxTl?rdid=UM69T1crbOSn3ABp#"}>
              <img className='fg-img' src="hegnholtfg.png
              " alt="" />
            </Link>
          </div>

        </div>

      </article>
      <Lightbox images={lightboxImages} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </div>
  );
}
