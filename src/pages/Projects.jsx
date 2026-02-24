import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = projects.filter(project => {
        const matchesFilter = filter === 'All' || project.status === filter;
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.client.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="projects-page">
            <section className="page-header">
                <div className="container">
                    <AnimatedSection animation="slide-up">
                        <h1 className="page-title text-gradient">Project Portfolio</h1>
                        <p className="page-subtitle">A showcase of our 105+ successful infrastructure engagements.</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section projects-portfolio">
                <div className="container">

                    <div className="portfolio-controls">
                        <div className="search-bar">
                            <Search className="search-icon" size={20} />
                            <input
                                type="text"
                                placeholder="Search projects by name, location, or client..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="filter-group">
                            <Filter className="filter-icon" size={20} />
                            <button
                                className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                                onClick={() => setFilter('All')}
                            >
                                All Projects
                            </button>
                            <button
                                className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`}
                                onClick={() => setFilter('Completed')}
                            >
                                Completed
                            </button>
                            <button
                                className={`filter-btn ${filter === 'Ongoing' ? 'active' : ''}`}
                                onClick={() => setFilter('Ongoing')}
                            >
                                Ongoing
                            </button>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <AnimatedSection key={project.id} animation="slide-up" delay={index * 100}>
                                    <ProjectCard project={project} />
                                </AnimatedSection>
                            ))
                        ) : (
                            <div className="no-results">
                                <h3>No projects found</h3>
                                <p>Try adjusting your search criteria or filters.</p>
                                <button className="btn btn-primary mt-3" onClick={() => { setSearchTerm(''); setFilter('All'); }}>
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {filteredProjects.length > 0 && (
                        <div className="pagination">
                            <span className="pagination-text">Showing {filteredProjects.length} of {projects.length} sample projects</span>
                            {/* Pagination controls would go here in a real app connecting to backend */}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Projects;
