import { Shield, Target, Lightbulb, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">About Watsys Consulting</h1>
                        <p className="page-subtitle">Expertise rooted in sustainable water engineering since 2018.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section about-intro">
                <div className="container intro-container">
                    <div className="intro-text">
                        <h2>Who We Are</h2>
                        <p>
                            Watsys Consulting Engineers Private Limited is a specialized engineering consultancy firm dedicated to revolutionizing urban and rural water infrastructure. Incorporated in 2018, we have rapidly emerged as a trusted partner for municipal corporations, water boards, and smart city SPVs across the nation.
                        </p>
                        <div className="corporate-details" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                            <p><strong>CIN:</strong> U74999KA2018PTC119278</p>
                            <p><strong>GST No:</strong> 29AACCW3301M1Z7</p>
                            <p><strong>PAN No:</strong> AACCW3301M</p>
                        </div>
                        <p>
                            We bring together deep domain expertise, cutting-edge technology, and an unwavering commitment to quality. Our solutions span from raw water source sustainability analyses to the design of complex 24x7 continuous water supply and gravity-based subterranean drainage networks.
                        </p>
                    </div>
                    <div className="intro-image-placeholder">
                        <div className="placeholder-content">
                            <span className="established-badge">Incorporated 2018</span>
                            <h3>Engineering Excellence</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mission-vision bg-alt">
                <div className="container">
                    <div className="mv-grid">
                        <AnimatedSection animation="slide-left" delay={100} className="mv-card hover-float">
                            <Target size={48} className="mv-icon pulse-soft" />
                            <h3>Our Mission</h3>
                            <p>
                                To provide innovative, cost-effective, and robust engineering consultancy services that empower utilities to deliver safe, reliable, and equitable water and sanitation services to communities.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-right" delay={200} className="mv-card hover-float">
                            <Lightbulb size={48} className="mv-icon pulse-soft" />
                            <h3>Our Vision</h3>
                            <p>
                                To be the premier engineering consultancy globally recognized for pioneering data-driven solutions in Non-Revenue Water reduction and intelligent water network design.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="section core-competencies">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h2 className="section-title text-center">Core Competencies</h2>
                    </AnimatedSection>
                    <div className="competencies-grid">
                        <AnimatedSection animation="fade-in" delay={100} className="competency-item hover-float">
                            <Shield className="comp-icon pulse-soft" size={32} />
                            <h4>Infrastructure Specialization</h4>
                            <p>Deep-dive expertise in large-scale DPR formulation, bid process management, and construction supervision for mega water projects.</p>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-in" delay={200} className="competency-item hover-float">
                            <TrendingUp className="comp-icon pulse-soft" size={32} />
                            <h4>NRW mastery</h4>
                            <p>End-to-end UFW reduction strategies including water auditing, DMA zoning, and acoustic leak detection methodologies.</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
