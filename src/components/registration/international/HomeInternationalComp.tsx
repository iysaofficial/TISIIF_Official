"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomeInternationalComp = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState<"offline" | "online" | null>(null);
  const [agreed, setAgreed] = useState(false);

  const handleOpenTerms = (type: "offline" | "online") => {
    setSelectedType(type);
    setAgreed(false);
    setShowModal(true);
  };

  const handleProceed = () => {
    if (selectedType === "offline") {
      localStorage.setItem("agreed_international_offline", "true");
      router.push("/registration/international/international-offline");
    } 
    else if (selectedType === "online") {
      localStorage.setItem("agreed_international_online", "true");
      router.push("/registration/international/international-online");
    }
  };

  return (
    <>
      <section className="registration-section">
        <div className="registration-container">
          <div className="registration-header">
            <h2 className="registration-title">REGISTRATION FORM FOR INTERNATIONAL PARTICIPANTS</h2>
            <h3 className="registration-subtitle">
              Choose Categories Competition for Registration TISIIF 2026
            </h3>
          </div>
        </div>

        <div className="registration-links">
          {/* <button onClick={() => handleOpenTerms("offline")} className="registration-link">
            Offline Competition
          </button>

          <button onClick={() => handleOpenTerms("online")} className="registration-link">
            Online Competition
          </button> */}
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2 className="modal-title">
              Terms & Conditions ({selectedType === "online" ? "Online" : "Offline"})
            </h2>

            <div className="modal-content">

              {selectedType === "online" && (
                <p>
                  Before proceeding, please read and agree to the following terms & conditions for Online Participants:<br/><br/>
                  • Participants who do not submit the required documents (extended abstract, PowerPoint) after two reminders will be considered to have resigned automatically.<br/>
                  • Participants must use the title and extended abstract in accordance with the category they are participating in. (International participants must use English for all required documents)<br/>
                  • The committee&apos;s decision regarding this matter is final and cannot be contested.<br/><br/>
                </p>
              )}

              {selectedType === "offline" && (
                <p>
                  • Participants who do not submit the required files (extended abstract, poster) after two reminders will be considered automatically resigned.<br/>
                  • Participants must use titles and extended abstracts that are in accordance with the category they are participating in. (International participants must use English for all requirements)<br/>
                  • Participants are required to make an A0-sized poster, bring the product and also the paper/extended abstract (in hard copy) during the judging session.<br/>
                  • The awarding of awards to participants will be carried out in accordance with the order set out in the schedule of events (participants are not allowed to request awards before their turn).<br/>
                  • Participants are required to follow the entire series of activities in accordance with the schedule prepared by the organizing committee.<br/>
                  • For offline participants who are entitled to the Best booth, Best Poster, Best Presentation, Best Project, cash prize, semi grand award, and grand award prizes but cannot attend the prize distribution ceremony, the prizes concerned will be declared forfeited.<br/>
                  • The committees decision regarding this matter is final and cannot be contested.<br/><br/>
                </p>
              )}

              <label className="agree-checkbox">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                I agree to the Terms & Conditions
              </label>
            </div>

            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="proceed-button" disabled={!agreed} onClick={handleProceed}>
                Accept & Proceed
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default HomeInternationalComp;
