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
                            Creating innovative works is a must in todays modern era. These demands
can be pursued by students and students as a milestone for the future of a
nation. With this in mind, the Indonesian Young Scientist Association (IYSA)
organized a competition on Mathematics, Physics, Energy, and Engineering,
Life Science, Environment, Educations, Technology, Social Science, Health &
Medicine, Biocensors Technology, Agriculture & Food Science, and Robotics
& Artificial Intelligence called the Thailand International Science, Invention
and Innovation Fair (TISIIF).
                        </p>
                        
                        <p className="about-description">
                            TISIIF is a competition for creativity in the field of scientific innovation and
invention among students (SD/SMP/SMA/University) and students at the
International level. This activity is expected to foster creativity and
innovation in the fields of science, education, environment, and social
science.
                        </p>

                        <p className="about-description">
                            In order to foster dynamic competition in the fields of scientific innovation,
education, social science, and the environment, TISIIF, in partnership with
Next Generation Thailand, is presenting a number of TISIIF activities this year
that are colored differently.
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