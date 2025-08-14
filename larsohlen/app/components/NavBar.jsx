"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (index) => {
        if (activeItem === index) {
            setActiveItem(null);
        } else {
            setActiveItem(index);
        }
    };

    return (
        <>
            <div className="burger-menu" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
            </div>

            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-list">
                    <li className="navbar-item" onClick={() => handleItemClick(0)}>
                        <Link href="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Home</p>
                        </Link>

                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(1)}>
                        <Link href="/fodbold-golf" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Fodboldgolf</p>
                        </Link>
                        <ul className={`navbar-dropdown ${activeItem === 1 ? 'active' : ''}`}>
                            <li><Link href="/bog" onClick={() => setIsOpen(false)}>Jeg er med i en bog!</Link></li>
                  
                            <li><Link href="/baner" onClick={() => setIsOpen(false)}>Baner</Link></li>


                        </ul>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(2)} >
                        <Link href="/sponsors" className="navbar-link" onClick={() => setIsOpen(false)} >
                            <p>Mine sponsorer</p>
                        </Link>
                        <ul className={`navbar-dropdown ${activeItem === 1 ? 'active' : ''}`}>
                            <li><Link href="/bil" onClick={() => setIsOpen(false)}>Min Bil</Link></li>


                        </ul>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(3)}>
                        <Link href="/galleri" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Galleri</p>
                        </Link>
                       
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(4)}>
                        <Link href="/fodbold" className="navbar-link" onClick={() => setIsOpen(false)} >
                            <p>Fodbold</p>
                        </Link>
                        <ul className={`navbar-dropdown ${activeItem === 4 ? 'active' : ''}`}>
                            <li><Link href="/broenby" onClick={() => setIsOpen(false)}>Brøndby</Link></li>
                              <li><Link href="/liverpool" onClick={() => setIsOpen(false)}>Liverpool</Link></li>
                            <li><Link href="/barcalona" onClick={() => setIsOpen(false)}>Barcelona</Link></li>
                            <li><Link href="/fif" onClick={() => setIsOpen(false)}>FIF</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(5)} >
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
