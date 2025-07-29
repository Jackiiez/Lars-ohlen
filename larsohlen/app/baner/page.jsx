"use client"

import Link from "next/link";

export default function Baner() {
    
    return (
        <div className="baner-container">
            <h1>baner jeg elsker</h1>
            <p>Et anlæg vi skal have link og artiklen:</p>
            <p>* Niels Vendelboe har altid bakket vores sport op</p>
            <p>* Afholdt massevis af Nordjyske Opens</p>
            <p>* DM</p>
            <p>* været tæt på at afholde Danish Open</p>
            <p>* Støttet op om DFGU, da vi havde en baneejer-union</p>
            <p>* God mand</p>
            <p>https://nordjyskfodboldgolf.dk/</p>
            <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0TBBXbZGpsdVFQY4FpY3vJTyKrCaSzXL99RbQxHhZFCpmA7DDGXBexudZy1Hej5QHl?rdid=PaPWIZjTrkGT0ERj#"} >
                <img src="nordjysk.jpg" alt="" />
            </Link>

            <div>
                <p>Fængslet</p>
                <p>https://www.faengslet.dk/det-sker/fodboldgolf/</p>
                <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0TBBXbZGpsdVFQY4FpY3vJTyKrCaSzXL99RbQxHhZFCpmA7DDGXBexudZy1Hej5QHl?rdid=PaPWIZjTrkGT0ERj#"} >
                    <img src="faengslet.jpg" alt="" />
                </Link>
            </div>

            <div>
                <p>Bramdrup</p>
                <p>https://www.bramdrupdamfodboldgolf.dk/</p>
                <Link href={"https://www.bramdrupdamfodboldgolf.dk/"} >
                    <img src="bramdrup.jpg" alt="" />
                </Link>
            </div>

            <div>
                <p>Hegnholt fodboldgolf</p>
                <p>https://www.facebook.com/profile.php/?id=61567089463610</p>
                <Link href={"https://www.facebook.com/lars.ohlen.9/posts/pfbid0C4t1yMHDdsUUxShKaqtNaJLvbwAX8bDB8qKg3KVKs7miNKYRKR4r4x4mDzk2jNxTl?rdid=5jL4tBWQIWNglo7z#"} >
                    <img src="hegnholt.jpg" alt="" />
                </Link>
            </div>
        </div>
    );
}
