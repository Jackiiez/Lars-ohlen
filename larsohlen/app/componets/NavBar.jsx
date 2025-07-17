import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <nav className="navbar">
          
            <ul className="navbar-list">
                {['hjem', 'fodbold golf', 'fodbold', 'Videoer og Billeder', 'Marton', 'Mine Sponsors', 'Kontakt mig'].map((city) => (
                    <li key={city} className="navbar-item">
                        <Link 
                            href={`/vejr/${city.toLowerCase().replace(' ', '-')}`} 
                            className="navbar-link"
                        >
                            {city}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;





