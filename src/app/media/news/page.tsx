"use client";
import Link from "next/link";
import "../../globals.css";
import "./news.css";

const newsData = [
  {
    year: "2026",
    description:
      "Official TISIIF 2026 News — read all information, announcements, and coverage for the 2026 event.",
    icon: "📰",
    driveUrl: "#",
    badge: "Available",
    badgeClass: "badge-available",
  },
  // {
  //   year: "2027",
  //   description:
  //     "Official TISIIF 2027 News — read all information, announcements, and coverage for the 2027 event.",
  //   icon: "🗞️",
  //   driveUrl: "#",
  //   badge: "Coming Soon",
  //   badgeClass: "badge-coming-soon",
  // },
];

export default function NewsPage() {
  return (
    <main className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-bg" />
        <div className="news-hero-content">
          <div className="news-breadcrumb">
            <Link href="/">Home</Link>
            <span className="news-breadcrumb-sep">›</span>
            <span>Media</span>
            <span className="news-breadcrumb-sep">›</span>
            <span className="news-breadcrumb-active">News</span>
          </div>
          <div className="news-hero-badge">
            <span className="news-hero-badge-dot" />
            Official Media
          </div>
          <h1 className="news-hero-title">
            Latest <span className="news-hero-accent">News</span>
          </h1>
          <p className="news-hero-subtitle">
            Official news and coverage from TISIIF — Thailand
            International Science, Invention & Innovation Fair
          </p>
        </div>
        <div className="news-hero-shape news-shape-1" />
        <div className="news-hero-shape news-shape-2" />
      </section>

      {/* Cards Section */}
      <section className="news-cards-section">
        <div className="news-cards-container">
          <div className="news-section-header">
            <h2 className="news-section-title">Edition News</h2>
            <p className="news-section-desc">
              Select a year to access the official TISIIF news
            </p>
          </div>

          <div className="news-cards-grid">
            {newsData.map((item) => (
              <div key={item.year} className="news-card">
                <div className="news-card-glow" />
                <div className="news-card-inner">
                  <div className="news-card-top">
                    <div className="news-card-icon-wrapper">
                      <span className="news-card-icon">{item.icon}</span>
                    </div>
                    <span className={`news-badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="news-card-body">
                    <h3 className="news-card-year">TISIIF {item.year}</h3>
                    <p className="news-card-desc">{item.description}</p>
                  </div>

                  <div className="news-card-footer">
                    <Link
                      href={item.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-card-btn"
                    >
                      <span className="news-btn-icon">📂</span>
                      <span>Open in Google Drive</span>
                      <span className="news-btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="news-back-wrap">
        <Link href="/" className="news-back-btn">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
