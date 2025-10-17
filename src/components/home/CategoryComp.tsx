import Link from "next/link"

const CategoryComp = () =>{
    return(
        <>
        <section className="category" id="category">
            <div className="category-container">
                <div className="section-header">
                    <span className="section-label">Competition Categories</span>
                    <h2 className="section-title">
                        Choose Your <span className="section-title-highlight">Innovation Field</span>
                    </h2>
                    <p className="section-subtitle">
                        Explore 10 international categories designed to highlight your creativity and expertise. Each field offers unique evaluation criteria and exciting opportunities to showcase your innovations on a global stage.
                    </p>
                </div>

                <div className="category-grid">
                    {/* Mathematics */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-calculator"></i>
                        </div>
                        <h3 className="category-name">Mathematics</h3>
                        <p className="category-description">
                            Applied mathematics, algorithms, and computational innovations
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Physics, Energy, and Engineering */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3 className="category-name">Physics, Energy & Engineering</h3>
                        <p className="category-description">
                            Renewable energy, mechanical systems, and physics applications
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Life Science */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-dna"></i>
                        </div>
                        <h3 className="category-name">Life Science</h3>
                        <p className="category-description">
                            Biology, genetics, biotechnology, and life innovations
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Environment */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h3 className="category-name">Environment</h3>
                        <p className="category-description">
                            Environmental solutions, sustainability, and green technology
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Education */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h3 className="category-name">Education</h3>
                        <p className="category-description">
                            Educational innovations, learning methods, and EdTech solutions
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Technology */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="category-name">Technology</h3>
                        <p className="category-description">
                            Software, hardware, IoT, and digital technology innovations
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Social Science */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="category-name">Social Science</h3>
                        <p className="category-description">
                            Social solutions, community development, and cultural innovations
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Health & Medicine, Biosensors Technology */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-heartbeat"></i>
                        </div>
                        <h3 className="category-name">Health & Medicine</h3>
                        <p className="category-description">
                            Medical innovations, biosensors technology, and healthcare solutions
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Agriculture & Food Science */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-seedling"></i>
                        </div>
                        <h3 className="category-name">Agriculture & Food Science</h3>
                        <p className="category-description">
                            Agricultural innovations, food technology, and farming solutions
                        </p>
                        <span className="category-count">View Details</span>
                    </div>

                    {/* Robotics & Artificial Intelligence */}
                    <div className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-robot"></i>
                        </div>
                        <h3 className="category-name">Robotics & AI</h3>
                        <p className="category-description">
                            Robotics, artificial intelligence, machine learning, and automation
                        </p>
                        <span className="category-count">View Details</span>
                    </div>
                </div>

                <div className="category-cta">
                    <p className="cta-text">
                        Still confused about choosing a category? We&apos;re here to help you!
                    </p>
                    <Link href="#contact" className="cta-category-button">
                        Free Consultation
                        <span className="btn-icon">→</span>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default CategoryComp