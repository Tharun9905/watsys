import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const IconComponent = Icons[service.icon];

    return (
        <div className="service-card">
            <div className="service-icon-wrapper">
                {IconComponent && <IconComponent size={32} className="service-icon" />}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.shortDesc}</p>
            <Link to={`/services#${service.id}`} className="service-link">
                Learn more <Icons.ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ServiceCard;
