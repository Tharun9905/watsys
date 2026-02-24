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
                        <h1 className="page-title text-gradient">Customer Impact & Demographics Survey</h1>
                        <p className="page-subtitle">Field-proven methodologies for critical water infrastructure.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section survey-content-section">
                <div className="container">
                    <AnimatedSection animation="fade-in" className="survey-text-box">
                        <h2>House Service Connection Survey</h2>
                        <p>
                            With extensive experience in executing House Service Connection Survey (Consumer Surveys) for water supply & UGD projects, our team conducts detailed house-to-house assessments to generate accurate data for multiple urban and rural water supply assignments. We have successfully mapped lakhs of consumer connections, verified service lines, assessed meter conditions, recorded consumption patterns, and captured supply timings and service feedback.
                        </p>
                        <p>
                            Each consumer is geo-tagged and integrated into a GIS-based network map, enabling utilities to clearly identify unauthorized connections, low-pressure areas, leakage-prone zones, and billing gaps. Our proven methodology and technology ensures high-quality datasets that support hydraulic modelling, NRW/UFW reduction strategies, and realistic demand estimation. This depth of experience allows us to deliver reliable, transparent, and customer-focused insights that strengthen the overall planning and execution of water supply improvement projects.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-in" delay={200} className="survey-text-box bg-alt-box">
                        <h2>Strategic Impact for UGD Projects</h2>
                        <p>
                            The Customer Survey forms a critical component of both water supply and UGD projects. With extensive experience in conducting customer surveys, we generate accurate field-level data essential for planning, design, and NRW reduction in water supply systems, as well as for capacity planning in UGD schemes.
                        </p>
                        <p>
                            By developing an authentic and comprehensive consumer-level dataset, our surveys support demand assessment, hydraulic modelling, and the implementation of transparent, efficient, and customer-oriented water supply and UGD systems.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section photo-gallery-section">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h2 className="section-title text-center">Field Operations & Survey Testimonials</h2>
                        <p className="text-center gallery-subtitle">A glimpse into our on-ground execution and consumer interaction processes.</p>
                    </AnimatedSection>

                    <div className="gallery-grid">
                        {images.map((imgSrc, index) => (
                            <AnimatedSection key={index} animation="fade-in" delay={index * 50} className="gallery-item hover-float">
                                <img src={imgSrc} alt={`Field Survey Operation ${index + 1}`} loading="lazy" />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerSurvey;
