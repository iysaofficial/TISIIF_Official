"use client";
import '../assets/css/Navbar.css'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from "react";

const NavbarComp = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    // Close menu ketika klik luar navbar
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".navbar")) {
            setMenuActive(false);
            setDropdownOpen(null);
        }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // Tutup menu saat resize ke desktop
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 768) {
            setMenuActive(false);
            setDropdownOpen(null);
        }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = (key: string) => {
        if (window.innerWidth <= 768) {
        setDropdownOpen(dropdownOpen === key ? null : key);
        }
    };

    return(
    <>
     <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          <Image
            width={150}
            height={150} 
            src="/assets/images/logo/Logo TISIIF (bordered).png" alt="Logo TISIIF" 
          />
        </Link>

        <button
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/#about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Guide Book
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/#category" className="nav-link">
              Category
            </Link>
          </li>

          {/* Dropdown: Kompetisi */}
          {/* <li
            className={`nav-item ${
              dropdownOpen === "kompetisi" ? "dropdown-open" : ""
            }`}
          >
            <Link
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("kompetisi");
              }}
            >
              Kompetisi <span className="dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">📋</span> Tentang Kompetisi
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">🏆</span> Kategori Lomba
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">📅</span> Timeline & Jadwal
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">🎯</span> Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </li> */}

          {/* Dropdown: Peserta */}
          {/* <li
            className={`nav-item ${
              dropdownOpen === "peserta" ? "dropdown-open" : ""
            }`}
          >
            <Link
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("peserta");
              }}
            >
              Peserta <span className="dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">📝</span> Panduan Pendaftaran
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">👥</span> Tim & Mentor
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">💰</span> Hadiah & Penghargaan
                </Link>
              </li>
            </ul>
          </li> */}

          {/* Dropdown: Sumber Daya */}
          {/* <li
            className={`nav-item ${
              dropdownOpen === "sumber" ? "dropdown-open" : ""
            }`}
          >
            <Link
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("sumber");
              }}
            >
              Sumber Daya <span className="dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">📚</span> Materi & Tutorial
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">❓</span> FAQ
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">🖼️</span> Galeri
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="#" className="dropdown-link">
                  <span className="dropdown-icon">📰</span> Berita & Artikel
                </Link>
              </li>
            </ul>
          </li> */}

          <li className="nav-item">
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
          </li>
          
          <li className="nav-item">
            <Link href="/#faq" className="nav-link">
              FAQ
            </Link>
          </li>
          

          <li className="nav-cta">
            <Link href="#" className="cta-button">
              Registrer Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
    )
}

export default NavbarComp