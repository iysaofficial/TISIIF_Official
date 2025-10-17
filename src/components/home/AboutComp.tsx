import Link from "next/link"
import Image from "next/image"
const AboutComp = () =>{
    return(
        <>
        <section className="about" id="about">
            <div className="about-container">
                <div className="section-header">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">
                        Inspiring the Next<span className="section-title-highlight"> Generation of Innovators</span>
                    </h2>
                    <p className="section-subtitle">
                        An international platform fostering creativity and innovation for a better future.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-logo">
                        <div className="logo-wrapper">
                            <div className="logo-circle circle-1"></div>
                            <div className="logo-circle circle-2"></div>
                            <div className="main-logo">
                                <Image
                                    width={350}
                                    height={350} 
                                    src="/assets/images/logo/Logo TISIIF (bordered).png" alt="Logo TISIIF" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="about-text">
                        <p className="about-description">
                            InnovateHub adalah platform kompetisi invensi terbesar dan terpercaya di Indonesia yang telah melahirkan ribuan inovator muda berbakat.
                        </p>
                        
                        <p className="about-description">
                            Sejak didirikan, kami berkomitmen untuk menciptakan ekosistem inovasi yang mendukung pengembangan ide-ide cemerlang dari seluruh penjuru Indonesia. Dengan dukungan mentor berpengalaman, fasilitas lengkap, dan jaringan industri yang luas, kami membantu para inovator muda untuk mewujudkan mimpi mereka.
                        </p>

                        <p className="about-description">
                            Bergabunglah dengan komunitas inovator yang telah menghasilkan lebih dari 1000 proyek inovatif di berbagai bidang seperti teknologi, kesehatan, pendidikan, dan lingkungan.
                        </p>

                        <Link href="/about" className="read-more-btn">
                            Read More
                            <span className="btn-icon">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutComp