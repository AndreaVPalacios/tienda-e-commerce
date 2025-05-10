// components/Footer.tsx
"use client";

import React, { useContext, useEffect } from "react";
import "./footer.css";
import { AuthContext } from "@/app/context/authcontext";
import { useRouter } from "next/navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Primera columna */}
        <div className="footer-column">
          <h3>SHOP FASTER WITH THE APP</h3>
          <img
            src="/images/google-apple.png" // Imagen de App Store
            alt="Download on the App Store"
            className="footer-app-image"
          />
          {/* <img
            src="/images/google-play.png" // Imagen de Google Play
            alt="Get it on Google Play"
            className="footer-app-image"
          /> */}
        </div>

        {/* Segunda columna */}
        <div className="footer-column">
          <h3>HELP</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Returns Policy</a>
            </li>
            <li>
              <a href="#">Make A Return</a>
            </li>
            <li>
              <a href="#">Submit A Fake</a>
            </li>
          </ul>
        </div>

        {/* Tercera columna */}
        <div className="footer-column">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>
              <a href="#" className="cursor-pointer">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <p>© 2025 | AppleBro | All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Notice</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
