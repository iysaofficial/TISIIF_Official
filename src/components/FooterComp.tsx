import '../assets/css/Footer.css'
import Link from 'next/link'
import Image from 'next/image';

const FooterComp = () => {
    return(
    <>
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="brand-logo">
                        <div className="">
                            <Image
                                width={150}
                                height={150} 
                                src="/assets/images/logo/Logo TISIIF (bordered).png" alt="Logo TISIIF" 
                            />
                        </div>
                    </div>
                    <p className="brand-description">
                        Platform kompetisi invensi terkemuka yang menghubungkan inovator muda dengan peluang untuk mengembangkan ide-ide brilian mereka.
                    </p>
                    <div className="media-icons">
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="" target="_blank"><i className="fab fa-instagram"></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target="_blank"><i className="fab fa-youtube"></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target="_blank"><i className="fab fa-tiktok"></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank"><i className="fab fa-linkedin"></i></Link>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Navigation</h3>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/#about">About</Link></li>
                        <li><Link href="/#category">Category</Link></li>
                        <li><Link href="#">Registration</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul className="footer-links">
                        <li><Link href="#">Guide Book</Link></li>
                        <li><Link href="#faq">FAQ</Link></li>
                        <li><Link href="#">Gallery</Link></li>
                        <li><Link href="#">Media</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li className="contact-item">
                            <span className="fas fa-map-marker-alt contact-icon"></span>
                            <Link 
                                href="https://goo.gl/maps/9x18coXGCmSscKec6" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519
                            </Link>
                        </li>
                        <li className="contact-item">
                            <span className="fas fa-phone-alt contact-icon"></span>
                            <Link 
                                href="https://wa.me/6288213248890" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                +62 882-1324-8890
                            </Link>
                        </li>
                        <li className="contact-item">
                            <span className="fas fa-envelope contact-icon"></span>
                            <Link 
                                href="mailto:youngscientist.iysa@gmail.com"
                                className="contact-link"
                            >
                                youngscientist.iysa@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright">© 2025 TISIIF. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    </>
    )
}

export default FooterComp