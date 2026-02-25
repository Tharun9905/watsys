import AnimatedSection from '../components/AnimatedSection';
import survey1 from '../assets/survey-1.jpeg';
import survey2 from '../assets/survey-2.jpeg';
import survey3 from '../assets/survey-3.jpeg';
import survey4 from '../assets/survey-4.jpeg';
import survey5 from '../assets/survey-5.jpeg';
import survey6 from '../assets/survey-6.jpeg';
import survey7 from '../assets/survey-7.jpeg';
import survey8 from '../assets/survey-8.jpeg';
import survey9 from '../assets/survey-9.jpeg';
import survey10 from '../assets/survey-10.jpeg';
import survey11 from '../assets/survey-11.jpeg';
import './CustomerSurvey.css';

const CustomerSurvey = () => {
    const images = [
        survey1, survey2, survey3, survey4, survey5,
        survey6, survey7, survey8, survey9, survey10, survey11
    ];

    return (
        <div className="survey-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Our Additional Technical Services</h1>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section survey-content-section" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <AnimatedSection animation="fade-in" className="survey-text-box">
                        <h2 style={{ background: '#0A2540', color: 'white', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Customer Survey</h2>
                        <p>
                            With extensive experience in executing House Service Connection Survey (Consumer Surveys) for water supply & UGD projects, our team conducts detailed house-to-house assessments to generate accurate and multiple urban and rural water supply assignments, we have successfully mapped lakhs of consumer connections, verified service lines, assessed meter conditions, recorded consumption patterns, and captured supply timings and service feedback. Each consumer is geo-tagged and integrated into a GIS-based network map, enabling utilities to clearly identify unauthorized connections, low-pressure areas, leakage-prone zones, and billing gaps. Our proven methodology and technology ensures high-quality datasets that support hydraulic modelling, NRW/UFW reduction strategies, and realistic demand estimation. This depth of experience allows us to deliver reliable, transparent, and customer-focused insights that strengthen the overall planning and execution of water supply improvement projects.
                        </p>
                        <p>
                            The Customer Survey forms a critical component of both water supply and UGD projects. With extensive experience in conducting customer surveys, we generate accurate field-level data essential for planning, design, and NRW reduction in water supply systems, as well as for and capacity planning in UGD schemes. By developing an authentic and comprehensive consumer-level dataset, our surveys support demand assessment, hydraulic modelling, and the implementation of transparent, efficient, and customer-oriented water supply and UGD systems.
                        </p>
                    </AnimatedSection>

                    {/* 4 Column Grid for Customer Survey Images */}
                    <div className="customer-survey-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                        <img src={survey1} alt="Customer Survey 1" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
                        <img src={survey2} alt="Customer Survey 2" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
                        <img src={survey3} alt="Customer Survey 3" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
                        <img src={survey4} alt="Customer Survey 4" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', aspectRatio: '3/4' }} />
                    </div>
                </div>
            </section>

            <section className="section survey-content-section bg-alt-box" style={{ margin: '0', borderRadius: '0', border: 'none', background: '#eef6fc' }}>
                <div className="container">
                    <AnimatedSection animation="fade-in" className="survey-text-box" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ background: '#0A2540', color: 'white', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Topographical Survey</h2>
                        <p>
                            Our team brings strong technical expertise and extensive field experience in conducting Road Surveys for water supply infrastructure projects. We carry out precise measurements of road widths, centreline profiles, pavement layers, gradients, and existing utility crossings using advanced surveying instruments. The collected data is integrated into GIS-based corridor maps to identify alignment constraints, optimize trench locations, and plan safe crossings with telecom, electrical, drainage, and other underground utilities. This survey output supports accurate pipeline routing, excavation planning, and reinstatement design in compliance with road authority standards. With a proven record across diverse urban and rural environments, we ensure that every water supply project is supported by reliable, field-verified road data, facilitating smooth execution and minimizing public disruption.
                        </p>
                    </AnimatedSection>

                    {/* Wavy Timeline Layout for Topographical Survey Images */}
                    <div className="topo-timeline-container">
                        <svg className="timeline-svg" viewBox="0 0 1200 600" preserveAspectRatio="none">
                            <path d="M 0,300 C 300,300 150,500 450,550 C 700,600 600,250 850,250 C 1050,250 1000,500 1200,400 M 1100,550 C 950,500 1000,250 1200,100" fill="none" stroke="#00B4D8" strokeWidth="12" strokeLinecap="round" />
                        </svg>

                        {/* Timeline Pins & Images */}
                        <div className="timeline-node" style={{ top: '45%', left: '8%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey5} className="timeline-img hover-float" alt="Topo Survey 1" />
                        </div>

                        <div className="timeline-node" style={{ top: '80%', left: '15%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey6} className="timeline-img hover-float" alt="Topo Survey 2" />
                        </div>

                        <div className="timeline-node" style={{ top: '65%', left: '35%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey7} className="timeline-img hover-float" alt="Topo Survey 3" />
                        </div>

                        <div className="timeline-node" style={{ top: '40%', left: '50%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey8} className="timeline-img hover-float" alt="Topo Survey 4" />
                        </div>

                        <div className="timeline-node" style={{ top: '50%', left: '72%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey9} className="timeline-img hover-float" alt="Topo Survey 5" />
                        </div>

                        <div className="timeline-node" style={{ top: '75%', left: '60%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey10} className="timeline-img hover-float" alt="Topo Survey 6" />
                        </div>

                        <div className="timeline-node" style={{ top: '35%', left: '90%' }}>
                            <div className="timeline-pin"></div>
                            <img src={survey11} className="timeline-img hover-float" alt="Topo Survey 7" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerSurvey;
