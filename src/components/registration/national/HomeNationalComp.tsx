"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomeNationalComp = () => {
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
      localStorage.setItem("agreed_national_offline", "true");
      router.push("/registration/national/national-offline");
    } else if (selectedType === "online") {
      localStorage.setItem("agreed_national_online", "true");
      router.push("/registration/national/national-online");
    }
  };

  return (
    <>
      <section className="registration-section">
        <div className="registration-container">
          <div className="registration-header">
            <h2 className="registration-title">REGISTRATION FORM FOR INDONESIA & THAILAND PARTICIPANTS</h2>
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
                  Before proceeding, please read and agree to the Terms & Conditions for National Online Participants:<br /><br />
                  • Participants who do not submit the required documents (extended abstract, PowerPoint) after two reminders will be considered to have withdrawn automatically.<br />
                  • Participants must use a title and extended abstract that match the selected category. (International participants must use English for all required documents.)<br />
                  • The committees decision on this matter is final and cannot be contested.<br /><br />
                  Additionally for Indonesia Participants, we inform you that each event will be registered for curation by SIMT Puspresnas. <br /><br />
                  However, the curation results are fully under the authority of Puspresnas and cannot be contested by any party. Therefore, we do not accept objections or complaints regarding the results determined by Puspresnas. <br /><br />
                </p>
              )}

              {selectedType === "offline" && (
                <p>
                  Before proceeding, please read and agree to the Terms & Conditions for National Offline Participants:<br /><br />
                  • Participants who do not submit the required documents (extended abstract, poster) after two reminders will be considered to have withdrawn automatically.<br />
                  • Participants must use a title and extended abstract that match the selected category. (International participants must use English for all requirements.)<br />
                  • Participants are required to create a poster in A0 size, bring their product, and also provide a paper/extended abstract (in hard copy) during the judging session.<br />
                  • Awards will be presented to participants according to the sequence set in the event schedule (participants are not allowed to request their award before their turn).<br />
                  • Participants are required to attend the entire event series according to the schedule prepared by the organizing committee.<br />
                  • For offline participants eligible for awards such as Best Booth, Best Poster, Best Presentation, Best Project, cash prizes, Semi Grand Award, and Grand Award but are unable to attend the awarding ceremony, the respective prize will be forfeited. <br />
                  • The committees decision on this matter is final and cannot be contested. <br /><br />
                  Additionally for Indonesia Participants, we inform you that each event will be registered for curation by SIMT Puspresnas.<br /><br />
                  However, the curation results are fully under the authority of Puspresnas and cannot be contested by any party. Therefore, we do not accept objections or complaints regarding the results determined by Puspresnas. <br /><br />
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

export default HomeNationalComp;
