

import React from 'react';
import '../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">     <hr className="divider-one" />
        <div className="contact-info">
           
          <p>60 68 66 60</p>
          <p>Facebook.com</p>
          <p>mail.com</p>
        </div>
        <hr className="divider" />
        <div className="footer-details">
          <p>Lars Ohlen</p>
          <p>2025 © Larsohlen.dk | Alle rettigheder forbeholdes.</p>
          <p>Hjemmeside: Jackie A.P Hansen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
