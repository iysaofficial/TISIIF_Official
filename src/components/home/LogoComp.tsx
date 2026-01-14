import Image from "next/image"
const LogoComp = () =>{
    return(
        <>
        <section className="partners">
            <div className="partners-container">

                <div className="section-header">
                    <span className="section-label">Partners & Sponsors</span>
                    <h2 className="section-title">
                        Our <span className="section-title-highlight">Trusted Partners</span>
                    </h2>
                    <p className="section-subtitle">
                        We are proud to collaborate with leading organizations who share our vision of fostering innovation and empowering young innovators
                    </p>
                </div>

                <div className="organized-section">
                    <h3 className="subsection-title">Organized By</h3>
                    
                    <div className="logo-grid">
                        <div className="logo-item">
                            <Image src="/assets/images/logo/LogoIYSA.webp" alt="Organization 1 Logo" width={200} height={100} />
                        </div>
                        <div className="logo-item">
                            <Image src="/assets/images/logo/Nextgen.png" alt="Organization 2 Logo" width={200} height={100} />
                        </div>
                    </div>
                </div>

                <div className="section-divider"></div>

                <div className="supported-section">
                    <h3 className="subsection-title">Supported By</h3>
                    
                    <div className="logo-grid">
                        <div className="logo-item">
                            <Image src="/assets/images/logo/MIICA.png" alt="Sponsor 1 Logo" width={200} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default LogoComp