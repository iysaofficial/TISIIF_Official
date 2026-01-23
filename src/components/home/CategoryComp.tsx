import Link from "next/link";

const CategoryComp = () => {
  return (
    <>
      <section className="category" id="category">
        <div className="category-container">
          <div className="section-header">
            <span className="section-label">Competition Categories</span>
            <h2 className="section-title">
              Choose Your{" "}
              <span className="section-title-highlight">Innovation Field</span>
            </h2>
            <p className="section-subtitle">
              Explore 10 international categories designed to highlight your
              creativity and expertise. Each field offers unique evaluation
              criteria and exciting opportunities to showcase your innovations
              on a global stage.
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
                Projects that investigate new mathematical ideas, theories, and
                applications are encouraged to submit to the &quot;Mathematics&quot;
                category
              </p>
            </div>

            {/* Physics, Energy, and Engineering */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="category-name">Physics, Energy & Engineering</h3>
              <p className="category-description">
                This energy source can come from nature, such as solar, wind and
                water energy, as well as from fossil fuels and nuclear
                reactions.
              </p>
            </div>

            {/* Life Science */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="category-name">IoT and Its Applications</h3>
              <p className="category-description">
                Internet of Things (IoT) focuses on creating new technologies,
                systems, and applications to solve challenges in areas such as
                security, data management, health care, and integration with
                modern technologies like artificial intelligence (AI)
              </p>
              {/* <span className="category-count">View Details</span> */}
            </div>

            {/* Environment, Agriculture & Food Science, */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="category-name">
                Environment, Agriculture & Food Science
              </h3>
              <p className="category-description">
                This category explores the interaction between people, nature,
                and technology to promote sustainability.
              </p>
            </div>

            {/* Education */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="category-name">Education and Social Sciences</h3>
              <p className="category-description">
                This category focuses on using technology to make education more
                creative and effective, such as through online learning tools
                and educational games.
              </p>
            </div>

            {/* Life Sciences, Translational Medicine, and Health */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="category-name">
                Life Sciences, Translational Medicine, and Health
              </h3>
              <p className="category-description">
                Life Science is the study of living things and how they grow,
                function, and interact with their environment.
              </p>
            </div>

            {/* Biotechnology and Biosensor Technology */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="category-name">
                Biotechnology and Biosensor Technology
              </h3>
              <p className="category-description">
                This category combines biology and technology to develop
                innovative products that improve health, food, and the
                environment.
              </p>
            </div>

            {/* Special Session - TISIIF Next Gen: Idea Pitching Competition on Innovation Science */}
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="category-name">
                Special Session - TISIIF Next Gen:Idea Pitching Competition on
                Innovation Science
              </h3>
              <p className="category-description">
                The exploration of the processes, factors, and outcomes that
                drive innovation, including the creation of novel ideas and
                solutions in science, technology, the environment, and society.
              </p>
            </div>
          </div>

          <div className="category-cta">
            <p className="cta-text">
              Still confused about choosing a category? We&apos;re here to help
              you!
            </p>
            <Link href="#contact" className="cta-category-button">
              Free Consultation
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryComp;
