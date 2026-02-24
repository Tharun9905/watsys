import { MapPin, Phone, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Contact Watsys</h1>
                        <p className="page-subtitle">Start a conversation with our infrastructure planning experts.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-layout-centered">

                        <AnimatedSection animation="fade-in" className="contact-info-centered">
                            <h2 className="text-center">Get in Touch</h2>
                            <p className="contact-intro text-center">
                                Whether you need a comprehensive DPR, hydraulic modeling analysis, or field surveys for an upcoming water infrastructure project, our team is ready to assist you.
                            </p>

                            <div className="info-cards-grid">
                                <AnimatedSection animation="slide-up" delay={100} className="info-card hover-float">
                                    <div className="info-icon-wrapper pulse-soft">
                                        <MapPin size={32} />
                                    </div>
                                    <h3>Our Offices</h3>
                                    <p><strong>Bangalore (HQ):</strong> 1232, 15th Main Road, BTM 2nd Stage, Bangalore - 560076<br /><br /><strong>Registered:</strong> #8, 3rd Cross, Garudachar Layout, Vijayanagar 3rd Stage, Mysuru - 570017</p>
                                </AnimatedSection>

                                <AnimatedSection animation="slide-up" delay={200} className="info-card hover-float">
                                    <div className="info-icon-wrapper pulse-soft">
                                        <Phone size={32} />
                                    </div>
                                    <h3>Direct Contact</h3>
                                    <p><strong>Shrivatsa Thilakprasad</strong><br />Director<br />+91 9164 00 4600</p>
                                </AnimatedSection>

                                <AnimatedSection animation="slide-up" delay={300} className="info-card hover-float">
                                    <div className="info-icon-wrapper pulse-soft">
                                        <Mail size={32} />
                                    </div>
                                    <h3>Email & Web</h3>
                                    <p>info@watsysconsulting.com<br />shrivatsa.shrivatsa@gmail.com<br /></p>
                                </AnimatedSection>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
