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
                            Creating innovative works is a must in todays modern era. These demands can be pursued by students and students as a milestone for the future of a nation. With this in mind, the Indonesian Young Scientist Association (IYSA) and Next Generation Knowledge ( NGK )  as a organized a competition namely Thailand International Science, Invention and Innovation Fair (TISIIF) with categories Mathematics, Physics, Energy, and Engineering, IoT and its Applications, Environment Agriculture & Food Science, Education and Social Science, Life Sciences, Translational Medicine and Health, Biotechnology and Biosensor Technology, Special Session - TISIIF Next Gen Idea Pitching COmpetition on Innovation Science.
                        </p>
                        
                        <p className="about-description">
                            TISIIF is a competition for creativity in the field of scientific innovation and invention among students ( Elementary, Secondary & University) level. This activity is expected to foster creativity and innovation in the fields of Mathematics, Physics, Energy, and Engineering, IoT and its Applications, Environment Agriculture & Food Science, Education and Social Science, Life Sciences, Translational Medicine and Health, Biotechnology and Biosensor Technology, Special Session - TISIIF Next Gen Idea Pitching Competition on Innovation Science.
                        </p>

                        {/* <Link href="/about" className="read-more-btn">
                            Read More
                            <span className="btn-icon">→</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutComp