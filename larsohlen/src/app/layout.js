import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../style/nav.scss";
import "../style/globals.css";
import "../style/hero.scss";
import "../style/sponsors.scss";
import "../style/lightbox.scss";
import "../style/gallery.scss";
import "../style/bog.scss";
import "../style/baner.scss";
import "../style/fodboldgolf.scss";
import "../style/fif.scss";
import "../style/bil.scss";
import "../style/fodbold.scss";
import "../style/salg.scss";
import "../style/loeb.scss";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lars Ohlen",
  description: "Lars Personlige hjemmeside",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <link href="https://fonts.googleapis.com/css2?family=Segoe:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Add PropTypes validation
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a required node
};
