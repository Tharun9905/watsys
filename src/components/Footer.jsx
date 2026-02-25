import { Link } from 'react-router-dom';
import { Droplets, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-col brand-col">
                    <Link to="/" className="footer-brand">
                        <img src={logo} style={{ width: "50px", height: "auto" }} alt="WCE Logo" className="brand-logo" />
                        <div className="brand-text">
                            <h2>WATSYS</h2>
                            <span>Consulting Engineers Pvt. Ltd.</span>
                        </div>
                    </Link>
                    <p className="footer-desc">
                        Specialized engineering in Water Supply Systems, Underground Drainage (UGD), and Non-Revenue Water (NRW) reduction.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/survey">Customer Survey</Link></li>
                        <li><Link to="/projects">Project Portfolio</Link></li>
                        <li><Link to="/team">Engineering Team</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col services-col">
                    <h3>Key Services</h3>
                    <ul>
                        <li><Link to="/services#water-supply">Water Supply Systems</Link></li>
                        <li><Link to="/services#ugd-sewer">Underground Drainage</Link></li>
                        <li><Link to="/services#nrw-reduction">NRW/UFW Reduction</Link></li>
                        <li><Link to="/services#hydraulic-modeling">Hydraulic Modeling</Link></li>
                        <li><Link to="/services#gis-survey">GIS & Survey Services</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Details</h3>
                    <div className="contact-item">
                        <MapPin size={20} className="contact-icon" />
                        <p>1232, 15th Main Road, BTM 2nd Stage, Bangalore, Karnataka - 560076</p>
                    </div>
                    <div className="contact-item">
                        <Phone size={20} className="contact-icon" />
                        <p>+91 9164 00 4600</p>
                    </div>
                    <div className="contact-item">
                        <Mail size={20} className="contact-icon" />
                        <p>info@watsysconsulting.com</p>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="container bottom-container">
                    <p>&copy; {currentYear} WATSYS Consulting Engineers Private Limited. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
