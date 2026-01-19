import Link from "next/link";

const HeroComp = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-background"></div>

        <div className="hero-overlay"></div>

        <div className="hero-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">
              <i className="fa-solid fa-clock"></i>
            </span>
            Open registration for 2026
            {/* Coming Soon */}
          </div>

          <h1 className="hero-title">
            Bring Your Innovation
            <br />
            <span className="hero-title-highlight">to Life at TISIIF</span>
          </h1>

          <p className="hero-description">
            The Thailand International Science, Invention and Innovation Fair
            (TISIIF) Indonesias leading platform for young innovators to
            showcase creative inventions and future-ready solutions. Register
            today and compete for prestigious awards from Bronze to Gold Medals
            and exclusive Special Awards!
          </p>

          {/* Registration */}
          <div className="hero-cta">
            {/* <Link href="/" className="btn btn-primary">
              <span><i className="fa-solid fa-calendar-check"></i></span>
              Coming Soon
            </Link> */}
            {/* <Link href="/" className="btn btn-primary">
                <span>
                <i className="fa-solid fa-calendar-check"></i>
                </span>
                Guidebook and Registration system are currently under maintenance.
                </Link> */}
            <Link href="/registration" className="btn btn-primary">Registration</Link>
            <Link
              href="https://drive.google.com/file/d/1JCLWwnMJ-D5TKZ9VkniD2mg3McIyqFaA/view?usp=sharing"
              className="btn btn-secondary"
              target="_blank"
            >
              <span>
                <i className="fa-solid fa-book"></i>
              </span>
              Guide Book
            </Link>
          </div>

          {/* <div className="hero-stats">
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-number">5,000+</div>
                        <div className="stat-label">Peserta</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🏆</div>
                        <div className="stat-number">1,200+</div>
                        <div className="stat-label">Proyek</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">💰</div>
                        <div className="stat-number">500 Jt</div>
                        <div className="stat-label">Total Hadiah</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🎓</div>
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Mentor</div>
                    </div>
                </div> */}
        </div>

        <div className="scroll-indicator"></div>
      </section>
    </>
  );
};

export default HeroComp;
