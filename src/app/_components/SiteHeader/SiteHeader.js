"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, patreonUrl, storeUrl } from "../../_data/podcast";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link
        className={styles.brand}
        href="/"
        aria-label="GNFP home"
        onClick={handleNavClick}
      >
        <span className={styles.brandMark}>GNFP</span>
        <span className={styles.brandText}>Gator Nation Football Podcast</span>
      </Link>

      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls="site-nav"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
      </button>

      <nav
        id="site-nav"
        className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </Link>
        ))}
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
        >
          Store
        </a>
        <a
          className={styles.navCta}
          href={patreonUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
        >
          Join Patreon
        </a>
      </nav>
    </header>
  );
}
