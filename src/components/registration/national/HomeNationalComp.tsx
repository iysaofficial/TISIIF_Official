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
            <h2 className="registration-title">REGISTRATION FORM FOR INDONESIA PARTICIPANTS</h2>
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
                  Before proceeding, please read and agree to the Terms & Conditions for National Online Participants:<br/><br/>
                  • Participants must submit required documents before the deadline.<br/>
                  • Participants must ensure all documents match the selected category.<br/>
                  • The committee’s decision is final and cannot be contested.<br/><br/>
                </p>
              )}

              {selectedType === "offline" && (
                <p>
                  Before proceeding, please read and agree to the Terms & Conditions for National Offline Participants:<br/><br/>
                  • Participants must bring poster & product onsite.<br/>
                  • Awards will be given based on schedule; no early awarding requests.<br/>
                  • Participants must attend all activities.<br/>
                  • The committee’s decision is final and cannot be contested.<br/><br/>
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
