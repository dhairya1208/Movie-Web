import React from 'react';
import '../CSS/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      

      <div className="footer-links">

        <div className="footer-column">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>

        <div className="footer-column">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>

        <div className="footer-column">
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on MovieWeb</a>
        </div>

        <div className="footer-column">
          <a href="#">Media Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Movie Web India</p>
        <p>© 2024 Movie Web. All rights reserved.</p>
      </div>

    </footer>
  );
}