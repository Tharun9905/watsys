import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2, CheckCircle, Calendar, FileText } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="section text-center" style={{ padding: '8rem 0' }}>
                <h2>Project not found</h2>
                <Link to="/projects" className="btn btn-primary mt-4">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <div className="project-hero">
                <div className="container">
                    <Link to="/projects" className="back-link">
                        <ArrowLeft size={18} /> Back to Portfolio
                    </Link>
                    <div className="project-hero-content">
                        <span className="project-category-badge">{project.category}</span>
                        <h1 className="project-detail-title">{project.name}</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="project-detail-grid">
                    <div className="project-main-content">
                        <section className="detail-section">
                            <h2>Project Overview</h2>
                            <p className="lead-desc">{project.description}</p>
                            <p>
                                This project represents a critical step forward in urban water infrastructure optimization. Meticulous planning and hydraulic design were employed to ensure that the resultant network is robust, scalable, and resilient. Our approach guarantees equity in water distribution while maintaining optimal pressure across the DMA.
                            </p>
                        </section>

                        <section className="detail-section">
                            <h2>Scope of Work</h2>
                            <ul className="scope-list">
                                <li><FileText size={20} className="text-secondary" /> Master Planning and Feasibility Study</li>
                                <li><FileText size={20} className="text-secondary" /> Hydraulic Modeling (Extended Period Simulation)</li>
                                <li><FileText size={20} className="text-secondary" /> Preparation of Detailed Project Report (DPR)</li>
                                <li><FileText size={20} className="text-secondary" /> Cost Estimation and Bill of Quantities (BOQ)</li>
                                <li><FileText size={20} className="text-secondary" /> Assistance in Bid Process Management</li>
                            </ul>
                        </section>
                    </div>

                    <div className="project-sidebar">
                        <div className="info-card">
                            <h3>Project Information</h3>
                            <div className="info-item">
                                <Building2 size={20} className="info-icon" />
                                <div>
                                    <strong>Client</strong>
                                    <span>{project.client}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <MapPin size={20} className="info-icon" />
                                <div>
                                    <strong>Location</strong>
                                    <span>{project.location}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <CheckCircle size={20} className="info-icon" />
                                <div>
                                    <strong>Status</strong>
                                    <span className={`status-badge ${project.status === 'Completed' ? 'completed' : 'ongoing'}`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div className="info-item">
                                <Calendar size={20} className="info-icon" />
                                <div>
                                    <strong>Year</strong>
                                    <span>2021 - Present</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
