import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>“We are reviving the traditional ways of old Bharat”</p>
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p>Phone: +123456789</p>
                    <p>Email: info@example.com</p>
                </div>
                <h4>Helpful Links</h4>

                <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
            <p> 2024, My Farm IND</p>
        </footer>
    );
}

export default Footer;
