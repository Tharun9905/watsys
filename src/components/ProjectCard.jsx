import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image-placeholder">
                <span className="project-category">{project.category}</span>
                <div className="project-status">
                    <span className={`status-dot ${project.status === 'Completed' ? 'status-completed' : 'status-ongoing'}`}></span>
                    {project.status}
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                {project.description !== project.name && (
                    <p className="project-desc">{project.description}</p>
                )}

                <div className="project-meta">
                    <div className="meta-item">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                    </div>
                    <div className="meta-item client-meta">
                        <strong>Client:</strong>
                        <span>{project.client}</span>
                    </div>
                </div>

                <Link to={`/projects/${project.id}`} className="btn btn-outline project-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
