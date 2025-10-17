"use client"
import { useEffect } from "react";
const FAQComp = () =>{
    useEffect(() => {
        // Tab switching
        const tabButtons = document.querySelectorAll<HTMLButtonElement>(".tab-button");
        const faqContents = document.querySelectorAll<HTMLElement>(".faq-content");

        tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            faqContents.forEach((content) => content.classList.remove("active"));

            this.classList.add("active");
            const tabId = this.dataset.tab;
            const target = document.getElementById(tabId!);
            if (target) target.classList.add("active");
        });
        });

        // Accordion toggle
        const faqHeaders = document.querySelectorAll<HTMLElement>(".faq-header");

        faqHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const faqItem = this.parentElement;
            if (faqItem) faqItem.classList.toggle("open");
        });
        });

        // Cleanup event listener ketika komponen unmount
        return () => {
        tabButtons.forEach((button) => {
            button.replaceWith(button.cloneNode(true)); // cara cepat hapus event listener
        });
        faqHeaders.forEach((header) => {
            header.replaceWith(header.cloneNode(true));
        });
        };
    }, []);
    
    return(
        <>
        <section className="faq" id="faq">
            <div className="faq-container">

                <div className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">
                        Frequently Asked <span className="section-title-highlight">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Find answers to common questions about registration, competition procedures, and post-event information
                    </p>
                </div>

                <div className="faq-tabs">
                    <button className="tab-button active" data-tab="after-register">After Register</button>
                    <button className="tab-button" data-tab="during-event">During The Event</button>
                    <button className="tab-button" data-tab="after-event">After The Event</button>
                </div>

                <div id="after-register" className="faq-content active">
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When will we get our LoA? Where will it be sent?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    After we receive your registration, we will send a confirmation email within 1×24 hours, and for the LoA we will send it to the team leader email address within 3×24 hours after registration.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">I registered one week ago but haven&apos;t received LoA and Invoice yet?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    Try checking the spam folder in your team leader&apos;s email, maybe the email from the IYSA team went to the spam folder. Make sure to check carefully!
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">Where do you upload the competition file?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    The drive link for uploading files and the link for uploading proof of payment will be included in the invoice.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">I want to pay the registration fee but can&apos;t find the invoice. Where is the payment transferred?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    Have you read LoA to the end yet? We will send the invoice with your team&apos;s LoA. Make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">I&apos;ve already paid the registration fee. Where can I upload the proof of payment?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When will the receipt be sent to us?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    We will send a receipt for payment in a maximum of 7 working days to the team leader&apos;s email, after you have uploaded proof of payment!
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">One more week for judging. How come I have not received my team&apos;s presentation schedule yet?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    We will send the online participant presentation schedule no later than 2 days before the judging takes place to the WhatsApp group and also the team leader&apos;s email. Make sure you diligently check the information we provide on the WhatsApp group and also email!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="during-event" className="faq-content">
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When will the presentation schedule be given by the committee?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    We will provide a presentation schedule no later than 2 days before the judging takes place or it could be earlier, and we will send it via the WA group and also the team leaders email.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">What application used for online presentation? Zoom, Google Meet or something else?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    For online judging, we always use the Zoom application and make sure your Zoom application is up to date.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When will the zoom link be given by the committee?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    We will provide a Zoom link on the judging day, and we will send it periodically to the group according to your team&apos;s presentation time.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">How many zoom accounts can join and what should I set my name?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    You can enter Zoom with a maximum of 5 accounts for participants, and all Zoom accounts must follow the name format that we have provided, namely &quot;Room Number_Team Leader Name_Institution Name&quot;.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">How long will the participants make the presentation?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    You will be given 15 minutes for 1 presentation session which will be divided into 2, namely the initial 7 minutes for the presentation and the final 8 minutes for the question and answer session with the jury.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">How many judges will come to the offline participants booth?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    Just like online judging, there will be 2 judges judging each team. And after being judged you will be given a sticker as a sign that your booth has been judged, make sure you get 2 stickers.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">Can we tidy up our booth after being judged?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    You can start tidying up the booth when all the teams have finished being judged, so if you have finished judging you can visit the booths of other participants first.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="after-event" className="faq-content">
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When will the winners be announced?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    Announcement of winners is held on the last day of each event, you can check the date on the schedule listed in the Guide Book.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">Where can we see the winning results?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    You can check the final results on the official website of the event you are participating in.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When will the E-certificate be sent?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    IYSA DOES NOT send E-Certificates to National participants or Indonesian Participants who take part in online events. Online National Participants will only receive a certificate in printed/hard form which will later be sent along with the medals via the JNE expedition.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">When is the online delivery of participant certificates?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    The certificate will be sent no later than one month after the announcement of the winner. You can periodically check the delivery receipt that we sent on the Whatsapp group whether your certificate has been sent or not.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">Where can we get a supervisor certificate?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    You can see and download the supervisor certificate on the official website of the event you are participating in.
                                </div>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-header">
                                <div className="faq-question">How to do medal doubling?</div>
                                <div className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    For offline participants, you can immediately duplicate the medals on the spot after the announcement of the winners takes place. And for online participants, you can duplicate the medals via the link we sent on the Whatsapp group. We will send duplicate information on the Whatsapp group no later than 2 days after the announcement of the winner.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FAQComp