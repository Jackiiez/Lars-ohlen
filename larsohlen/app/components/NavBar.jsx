"use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="burger-menu" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
            </div>

            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link href="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/fodbold-golf" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Fodbold golf</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/sponsors" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Mine sponsore</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/galleri" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Galleri</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/fodbold" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Fodbold</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/salg" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Salg</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                            ⚽️⛳️🕳
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
