import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo1} alt="Logo" />
          <p className='para'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </p>
          <div className="footer-socials">
            <a href="#"><FaWhatsapp
                size={32}
                color="white"
                style={{
                  backgroundColor: "#8CA141",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              /></a>
            <a href="#"><FaInstagram
                size={32}
                color="white"
                style={{
                  backgroundColor: "#8CA141",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              /></a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M13.6558 2.34419C12.1426 0.831007 10.1333 0 8 0C5.86253 0 3.85323 0.831007 2.34419 2.34419C0.835147 3.85736 0 5.86666 0 8C0 10.1375 0.831013 12.1468 2.34419 13.6558C3.85737 15.169 5.86667 16 8 16C10.1375 16 12.1468 15.169 13.6558 13.6558C15.169 12.1426 16 10.1333 16 8C16 5.86253 15.169 3.85323 13.6558 2.34419ZM7.99586 15.0201C4.1261 15.0201 0.975717 11.8698 0.975717 8C0.975717 4.13023 4.1261 0.979845 7.99586 0.979845C11.8656 0.979845 15.016 4.13023 15.016 8C15.016 11.8698 11.8698 15.0201 7.99586 15.0201Z" fill="#444F25"/>
<path d="M7.99587 1.95996C4.66357 1.95996 1.95557 4.6721 1.95557 8.00027C1.95557 11.3326 4.6677 14.0406 7.99587 14.0406C11.324 14.0406 14.0362 11.3284 14.0362 8.00027C14.0403 4.66797 11.3282 1.95996 7.99587 1.95996ZM8.48786 13.0401V12.085H7.50802V13.0401C5.10595 12.8085 3.19174 10.8943 2.96021 8.49226H3.91525V7.51241H2.96021C3.19174 5.11035 5.10595 3.19614 7.50802 2.96461V3.91965H8.48786V2.96048C10.8899 3.192 12.8041 5.10621 13.0357 7.50828H12.0806V8.48812H13.0357C12.8041 10.8902 10.8899 12.8085 8.48786 13.0401Z" fill="#444F25"/>
<path d="M6.71411 7.51204H9.27742L7.99577 4.94873L6.71411 7.51204Z" fill="#444F25"/>
<path d="M7.99577 11.0555L9.27742 8.49219H6.71411L7.99577 11.0555Z" fill="#444F25"/>
</svg> City, Country</p>
          <p>Building 00, Street 000</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
<path d="M0 0V16H9.71122V0H0ZM8.58676 1.12446V10.7825L1.12446 10.8234V1.12446H8.58676ZM1.12446 14.8715V11.9479L8.58676 11.907V14.8715H1.12446Z" fill="#444F25"/>
<path d="M4.92717 12.5732C4.50192 12.5732 4.15845 12.9249 4.15845 13.3542C4.15845 13.7877 4.50192 14.1352 4.92717 14.1352C5.35242 14.1352 5.69589 13.7836 5.69589 13.3542C5.69589 12.9249 5.35242 12.5732 4.92717 12.5732Z" fill="#444F25"/>
</svg> 00000 00000</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M16.0038 0L0 7.84553L3.76448 9.56186V15.2067L8.15828 12.8343L11.9952 16L16.0038 0ZM5.75542 10.2102L5.70584 10.2636L4.69892 12.3614V9.49702L10.954 4.75614L5.75542 10.2102ZM11.16 3.4174L4.17259 8.71895L2.19309 7.81502L11.16 3.4174ZM5.27866 13.3263L6.26269 11.2744L7.3764 12.1936L5.27866 13.3263ZM6.78522 10.4925L14.4172 2.47914L11.446 14.3371L6.78522 10.4925Z" fill="#444F25"/>
</svg> Dummyemail.com</p>
        </div>

        <div className="footer-map">
          <h3>Find Us On</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3922.821776047385!2d76.19420797503822!3d10.514699589618575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDMwJzUyLjkiTiA3NsKwMTEnNDguNCJF!5e0!3m2!1sen!2sin!4v1725695469450!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        
        <p>Copyright © 2024, All Rights Reserved. Developed by <a href="#">Ginger Technologies</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;
