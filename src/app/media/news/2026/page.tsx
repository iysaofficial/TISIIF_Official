"use client";
import Link from "next/link";
import "../../../globals.css";
import "../news.css";

const articles2026 = [
  {
    title: "SMAN Modal Bangsa Aceh Raih Silver Medal TISIIF 2026 di Thailand",
    description:
      "PATHUM THANI, THAILAND — Prestasi gemilang kembali ditorehkan siswa SMA Negeri Modal Bangsa di kancah internasional. Tim riset SMAN Modal Bangsa Aceh berhasil…",
    image:
      "https://www.sman-modalbangsa.sch.id/wp-content/uploads/2026/08/tisif_2026_silver.jpg",
    url: "https://sman-modalbangsa.sch.id/en/berita/sman-modal-bangsa-aceh-raih-silver-medal-tisiif-2026-di-thailand",
    source: "sman-modalbangsa.sch.id",
  },
  {
    title: "Jeli Herbal Siswa Raih Perak TISIIF",
    description:
      "Satu lagi Tim KIR SMA Negeri 3 yang mengukir prestasi dalam ajang Thailand International Science, Invention and Innovation Fair (TISIIF) 202...",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK1O-sqO1xTB4GUR0f89485vs8E_cqL3PTAHqDfTJe-K2hyphenhyphenkx0EyYurUUeQrF677P7tJiC9Xe3ir8mbZP8xRmQt8YnSC-hR-N8LBRNe5UOEK7hCGucDYUnIqOk8SBdh8s_DQyn513Tr2BiuveBtCVZPhTgimN-zCFh5r87svNW2ot4oN8RfI16SbdY7iCx/w1200-h630-p-k-no-nu/WhatsApp%20Image%202026-08-13%20at%2011.42.16.jpeg",
    url: "https://www.sman3sltg.sch.id/2026/08/jeli-herbal-siswa-raih-perak-tisiif.html",
    source: "sman3sltg.sch.id",
  },
  {
    title:
      "Keren! SMAN Taruna Nala Jatim Borong 5 Penghargaan di Thailand, Raih Grand Prize hingga Best Booth TISIIF 2026",
    description:
      "Bukan hanya membawa pulang medali, siswa SMAN Taruna Nala Jawa Timur sukses mencuri perhatian di panggung inovasi internasional Thailand. Empat tim yang bertanding berhasil menyabet dua emas, dua p…",
    image:
      "https://indonesiaproud.wordpress.com/wp-content/uploads/2026/08/juara-smantarnala-di-indonesiaproud-wordpress-com.jpg",
    url: "https://indonesiaproud.wordpress.com/2026/08/27/keren-sman-taruna-nala-jatim-borong-5-penghargaan-di-thailand-raih-grand-prize-hingga-best-booth-tisiif-2026/",
    source: "indonesiaproud.wordpress.com",
  },
  {
    title:
      "Tim SMAN Modal Bangsa Aceh Raih Medali Perak Internasional pada TISIIF 2026 di Thailand - Serambinews.com",
    description:
      "Dalam kompetisi ilmiah internasional tersebut, tim mempresentasikan karya inovatif berjudul",
    image:
      "https://asset.tribunnews.com/KxtAASmzpU4BciLdsM--umY0U0k=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/aceh/foto/bank/originals/Siswa-SMA-Mosa-Aceh-0108.jpg",
    url: "https://aceh.tribunnews.com/nanggroe/1036826/tim-sman-modal-bangsa-aceh-raih-medali-perak-internasional-pada-tisiif-2026-di-thailand",
    source: "aceh.tribunnews.com",
  },
];

export default function News2026Page() {
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
            <Link href="/media/news">News</Link>
            <span className="news-breadcrumb-sep">›</span>
            <span className="news-breadcrumb-active">2026</span>
          </div>
          <div className="news-hero-badge">
            <span className="news-hero-badge-dot" />
            TISIIF 2026 Edition
          </div>
          <h1 className="news-hero-title">
            TISIIF <span className="news-hero-accent">2026</span> News
          </h1>
          <p className="news-hero-subtitle">
            Official news, media coverage, and press releases for the Thailand
            International Science, Invention & Innovation Fair 2026.
          </p>
        </div>
        <div className="news-hero-shape news-shape-1" />
        <div className="news-hero-shape news-shape-2" />
      </section>

      {/* Articles Section */}
      <section className="news-cards-section">
        <div className="news-cards-container" style={{ maxWidth: "1100px" }}>
          <div className="news-section-header">
            <h2 className="news-section-title">Articles & Media Coverage</h2>
            <p className="news-section-desc">
              Discover all news publications and achievements from TISIIF 2026
            </p>
          </div>

          <div className="articles-cards-grid">
            {articles2026.map((article, index) => (
              <div key={index} className="article-card">
                <div className="news-card-glow" />
                <div className="article-image-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image"
                  />
                </div>
                <div className="article-content">
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--news-accent)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {article.source}
                  </span>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-desc">{article.description}</p>
                  <div className="article-footer">
                    <Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-link"
                    >
                      Read Full Article <span className="news-btn-arrow">→</span>
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
        <Link href="/media/news" className="news-back-btn">
          ← Back to All News
        </Link>
      </div>
    </main>
  );
}
