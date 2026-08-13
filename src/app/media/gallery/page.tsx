"use client";
import Link from "next/link";
import "../../globals.css";
import "./gallery.css";

const galleryData = [
  {
    year: "2026",
    description:
      "Official TISIIF 2026 Gallery — view photos and videos from the 2026 event.",
    icon: "📷",
    driveUrl: "https://drive.google.com/drive/folders/1pQRz1OVHa5vk4wwc-VzaItgMkMXoeKgK?usp=sharing",
    badge: "Available",
    badgeClass: "badge-available",
  },
  // {
  //   year: "2027",
  //   description:
  //     "Official TISIIF 2027 Gallery — view photos and videos from the 2027 event.",
  //   icon: "📷",
  //   driveUrl: "#",
  //   badge: "Coming Soon",
  //   badgeClass: "badge-coming-soon",
  // },
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg" />
        <div className="gallery-hero-content">
          <div className="gallery-breadcrumb">
            <Link href="/">Home</Link>
            <span className="gallery-breadcrumb-sep">›</span>
            <span>Media</span>
            <span className="gallery-breadcrumb-sep">›</span>
            <span className="gallery-breadcrumb-active">Gallery</span>
          </div>
          <div className="gallery-hero-badge">
            <span className="gallery-hero-badge-dot" />
            Official Media
          </div>
          <h1 className="gallery-hero-title">
            Our <span className="gallery-hero-accent">Gallery</span>
          </h1>
          <p className="gallery-hero-subtitle">
            Official photos and videos from TISIIF — Thailand
            International Science, Invention & Innovation Fair
          </p>
        </div>
        <div className="gallery-hero-shape gallery-shape-1" />
        <div className="gallery-hero-shape gallery-shape-2" />
      </section>

      {/* Cards Section */}
      <section className="gallery-cards-section">
        <div className="gallery-cards-container">
          <div className="gallery-section-header">
            <h2 className="gallery-section-title">Edition Gallery</h2>
            <p className="gallery-section-desc">
              Select a year to access the official TISIIF gallery
            </p>
          </div>

          <div className="gallery-cards-grid">
            {galleryData.map((item) => (
              <div key={item.year} className="gallery-card">
                <div className="gallery-card-glow" />
                <div className="gallery-card-inner">
                  <div className="gallery-card-top">
                    <div className="gallery-card-icon-wrapper">
                      <span className="gallery-card-icon">{item.icon}</span>
                    </div>
                    <span className={`gallery-badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="gallery-card-body">
                    <h3 className="gallery-card-year">TISIIF {item.year}</h3>
                    <p className="gallery-card-desc">{item.description}</p>
                  </div>

                  <div className="gallery-card-footer">
                    <Link
                      href={item.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-card-btn"
                    >
                      <span className="gallery-btn-icon">📂</span>
                      <span>Open in Google Drive</span>
                      <span className="gallery-btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="gallery-back-wrap">
        <Link href="/" className="gallery-back-btn">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
