import Link from "next/link"

const AfterEventComp = () =>{
    return(
        <>
        <section className="after-event">
            <div className="after-event-container">

                <div className="section-header">
                    <span className="section-label">After Event 2026</span>
                    <h2 className="section-title">
                        Relive The <span className="section-title-highlight">Memorable Moments</span>
                    </h2>
                    <p className="section-subtitle">
                        Watch the highlights and inspiring stories from our latest innovation competition event
                    </p>
                </div>

                <div className="after-event-content">
                    <div className="video-section">
                        <div className="video-wrapper">
                            <div className="video-frame"></div>
                            <iframe 
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                title="Innovation Competition After Event Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    
                        <div className="highlight-box"  style={{ marginTop: "32px" }}>
                            <div className="quote-icon">"</div>
                            <p className="highlight-text">
                                Every innovation starts with a dream. Every achievement is born from dedication. Together, we create the future.
                            </p>
                        </div>
                    </div>

                    <div className="text-section">
                        <p className="event-description">
                            We are proud to present a video summary of this unforgettable event, as a testament to the passion, dedication, and brilliance that each participant has shown. In our after event video, you will be presented with the memorable moments we had together.
                        </p>

                        <p className="event-description">
                            We invite you to join the celebration. See how passion, hard work, and collaboration can produce something extraordinary. We hope that through this video, you will not only feel our excitement, but also be inspired to continue pursuing your dreams and contributing to the field of science.
                        </p>

                        <p className="event-description">
                            Thank you to all participants, mentors, and everyone who supported IYSA Olympiad. See you on the next event!
                        </p>

                        <div className="signature">
                            <p className="signature-text">InnovateHub Team</p>
                            <p className="signature-subtitle">Innovation Competition Organizer</p>
                        </div>

                        <div className="event-cta">
                            <Link href="#" className="cta-button btn-primary">
                                <span className="btn-icon">📝</span>
                                Register Next Event
                            </Link>
                            <Link href="#" className="cta-button btn-secondary">
                                <span className="btn-icon">📸</span>
                                View Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
}

export default AfterEventComp