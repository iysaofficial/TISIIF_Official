"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SubmittedData {
  name: string;
  project: string;
  school: string;
}

const SuccessComp: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  useEffect(() => {
    const data = sessionStorage.getItem("submittedData");
    if (data) {
      setSubmittedData(JSON.parse(data));
    }
  }, []);
  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-checkmark">✓</div>
        <h1 className="success-title">Registration Successful!</h1>
        <p className="success-description">We appreciate your participation and look forward to your engagement.</p>
        {submittedData && (
          <div className="submitted-data-box">
            <h2 className="submitted-data-title">Your Submission Summary:</h2>
            <div className="submitted-data-item"><strong>Team Name:</strong> {submittedData.name}</div>
            <div className="submitted-data-item"><strong>Project Title:</strong> {submittedData.project}</div>
            <div className="submitted-data-item"><strong>School:</strong> {submittedData.school}</div>
          </div>
        )}
        <p className="success-description">*If the data appears, take a screenshot of this page as proof of successful registration.</p>

        <Link href="/" className="success-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default SuccessComp;