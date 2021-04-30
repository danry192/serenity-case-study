import React from "react";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footer-options">
        <li className="footer-link"><a href="#" className="footer-linktext">Home</a></li>
        <li className="footer-link"><a href="#" className="footer-linktext">About</a></li>
        <li className="footer-link"><a href="#" className="footer-linktext">Contact Us</a></li>
        <li className="footer-link"><a href="#" className="footer-linktext">Requests</a></li>
        <li className="footer-link"><a href="#" className="footer-linktext">Login</a></li>
        
      </ul>
      <span>© 2019 Developed by Pat. All Rights Reserved.</span>
    </footer>

  );
}

export default Footer;