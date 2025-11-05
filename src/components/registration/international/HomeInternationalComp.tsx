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
          <button onClick={() => handleOpenTerms("offline")} className="registration-link">
            Offline Competition
          </button>

          <button onClick={() => handleOpenTerms("online")} className="registration-link">
            Online Competition
          </button>
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
                  • Participants who do not submit the required documents (extended abstract, PowerPoint) after two reminders will be considered to have withdrawn automatically.<br/>
                  • Participants must use a title and extended abstract that match the selected category. (International participants must use English for all required documents.)<br/>
                  • The committee’s decision on this matter is final and cannot be contested.<br/><br/>
                  Additionally, we inform you that each event will be registered for curation by SIM T Puspresnas.<br/><br/>
                  However, the curation results are fully under the authority of Puspresnas and cannot be contested by any party. Therefore, we do not accept objections or complaints regarding the results determined by Puspresnas.
                </p>
              )}

              {selectedType === "offline" && (
                <p>
                  Before proceeding, please read and agree to the following terms & conditions for Offline Participants:<br/><br/>
                  • Participants who do not submit the required documents (extended abstract, poster) after two reminders will be considered to have withdrawn automatically.<br/>
                  • Participants must use a title and extended abstract that match the selected category. (International participants must use English for all requirements.)<br/>
                  • Participants must create a poster in A0 size, bring their product, and provide hard copy extended abstract during judging.<br/>
                  • Awards are presented according to the event schedule. Early awarding is not allowed.<br/>
                  • Participants must attend the entire event schedule.<br/>
                  • If a participant wins but does not attend the awarding ceremony, the prize will be forfeited.<br/>
                  • The committee’s decision is final and cannot be contested.<br/><br/>
                  Additionally, we inform you that each event will be registered for curation by SIM T Puspresnas.<br/><br/>
                  However, the curation results are fully under the authority of Puspresnas and cannot be contested by any party.
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
