"use client";
import Link from "next/link"
import { useEffect } from "react";

const ContactComp = () =>{
      useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

        const form = document.forms.namedItem("home-contact");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Message sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send Message.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);

    return(
        <>
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="section-header">
                    <span className="section-label">Contact Us</span>
                    <h2 className="section-title">
                        Get In Touch <span className="section-title-highlight">With Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Have questions about the competition? We're here to help! Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <p className="info-text">
                            We're always excited to hear from passionate innovators like you. Whether you have questions about registration, need guidance on your project, or want to learn more about our competition, feel free to reach out!
                        </p>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="card-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Email Address</h3>
                                    <p>
                                        <Link href="mailto:youngscientist.iysa@gmail.com">youngscientist.iysa@gmail.com</Link>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="card-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Phone Number</h3>
                                    <p>
                                        <Link href="https://wa.me/6288213248890" target="_blank" rel="noopener noreferrer">
                                            +62 882-1324-8890
                                        </Link><br/>
                                        Available Mon-Fri, 8AM - 4:30PM
                                    </p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="card-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Office Location</h3>
                                    <p>
                                        <Link href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank" rel="noopener noreferrer">
                                            Jl. Kemang, Pasir Putih, Kec. Sawangan<br/>
                                            Kota Depok, Jawa Barat 16519
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <Link href="https://www.facebook.com/profile.php?id=100063979907207" className="social-link" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#" className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link href="https://www.youtube.com/@IYSAOfficial" className="social-link" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link href="https://www.tiktok.com/@iysa.official" className="social-link" aria-label="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </Link>
                            <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" className="social-link" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3 className="form-title">Send Us a Message</h3>
                        
                        <form id="contactForm" name="home-contact">
                            <input type="hidden" name="Event" value="TISIIF" readOnly />
                            
                            <div className="form-group">
                                <label className="form-label">
                                    Your Name <span className="required">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="Name" 
                                    className="form-input" 
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Email Address <span className="required">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="Email" 
                                    className="form-input" 
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Your Message <span className="required">*</span>
                                </label>
                                <textarea 
                                    id="message" 
                                    name="Message" 
                                    className="form-textarea" 
                                    placeholder="Tell us how we can help you..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                <span>Send Message</span>
                                <span className="btn-icon">
                                    <i className="fas fa-paper-plane"></i>
                                </span>
                            </button>

                            <p className="form-note">
                                By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll get back to you within 24 hours.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactComp