"use client";
import Link from "next/link";
import "../../globals.css";
import "./press-release.css";

const pressReleaseData = [
  {
    year: "2026",
    description:
      "Official TISIIF 2026 Press Release — find all information, announcements, and official documentation for the 2026 event.",
    icon: "📰",
    driveUrl: "https://drive.google.com/file/d/1bXyGjTYEXIZHzdAAT2DJzx65w8E9V6U5/view?usp=sharing", // ganti dengan link Drive 2026
    badge: "Available",
    badgeClass: "badge-available",
  },
  {
    year: "2027",
    description:
      "Official TISIIF 2027 Press Release — find all information, announcements, and official documentation for the 2027 event.",
    icon: "📄",
    driveUrl: "https://drive.google.com/your-2027-press-release-link", // ganti dengan link Drive 2027
    badge: "Coming Soon",
    badgeClass: "badge-coming-soon",
  },
];

export default function PressReleasePage() {
  return (
    <main className="pr-page">
      {/* Hero Section */}
      <section className="pr-hero">
        <div className="pr-hero-bg" />
        <div className="pr-hero-content">
          <div className="pr-breadcrumb">
            <Link href="/">Home</Link>
            <span className="pr-breadcrumb-sep">›</span>
            <span>Media</span>
            <span className="pr-breadcrumb-sep">›</span>
            <span className="pr-breadcrumb-active">Press Release</span>
          </div>
          <div className="pr-hero-badge">
            <span className="pr-hero-badge-dot" />
            Official Media
          </div>
          <h1 className="pr-hero-title">
            Press <span className="pr-hero-accent">Release</span>
          </h1>
          <p className="pr-hero-subtitle">
            Official documents and press releases from TISIIF — Thailand
            International Science, Invention & Innovation Fair
          </p>
        </div>
        <div className="pr-hero-shape pr-shape-1" />
        <div className="pr-hero-shape pr-shape-2" />
      </section>

      {/* Cards Section */}
      <section className="pr-cards-section">
        <div className="pr-cards-container">
          <div className="pr-section-header">
            <h2 className="pr-section-title">Edition Press Release</h2>
            <p className="pr-section-desc">
              Select a year to access the official TISIIF press release
            </p>
          </div>

          <div className="pr-cards-grid">
            {pressReleaseData.map((item) => (
              <div key={item.year} className="pr-card">
                <div className="pr-card-glow" />
                <div className="pr-card-inner">
                  <div className="pr-card-top">
                    <div className="pr-card-icon-wrapper">
                      <span className="pr-card-icon">{item.icon}</span>
                    </div>
                    <span className={`pr-badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="pr-card-body">
                    <h3 className="pr-card-year">TISIIF {item.year}</h3>
                    <p className="pr-card-desc">{item.description}</p>
                  </div>

                  <div className="pr-card-footer">
                    <Link
                      href={item.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-card-btn"
                    >
                      <span className="pr-btn-icon">📂</span>
                      <span>Open in Google Drive</span>
                      <span className="pr-btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="pr-back-wrap">
        <Link href="/" className="pr-back-btn">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
