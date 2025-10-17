"use client";
import { useEffect } from "react"
const NewsletterComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

        const form = document.forms.namedItem("footer-newsletter");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Data sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send data.");
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
        <section className="newsletter">
            <div className="newsletter-container">

                <h2 className="newsletter-title">
                    Subscribe to Our <span className="title-highlight">Newsletter</span>
                </h2>

                <p className="newsletter-description">
                    Get exclusive updates, competition news, and innovation insights delivered to your inbox
                </p>

                <form id="newsletterForm" className="newsletter-form" name="footer-newsletter">
                    <input 
                        name="Email"
                        type="email" 
                        id="emailInput"
                        className="email-input" 
                        placeholder="Enter your email address"
                        required
                    />
                    <button type="submit" className="subscribe-button">
                        Subscribe
                        <span className="btn-icon">→</span>
                    </button>
                </form>

                <div id="successMessage" className="success-message">
                    🎉 Thank you for subscribing! Check your email for confirmation.
                </div>

                <p className="privacy-note">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp