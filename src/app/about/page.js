import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import {
  aboutHighlights,
  aboutPoints,
  contactEmail,
  patreonUrl,
  storeUrl,
  youtubeUrl,
} from "../_data/podcast";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Gator Nation Football Podcast",
  description:
    "Learn about the Gator Nation Football Podcast, recorded in Gainesville by UF grads Allen Williams and James Di Virgilio.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>About the show</p>
            <h1>Florida football conversation from Gainesville.</h1>
            <p>
              The Gator Nation Football Podcast is powered by listeners and
              recorded in Gainesville, FL, where Allen Williams and James Di
              Virgilio, both UF grads, reside.
            </p>
            <div className={styles.actions}>
              <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                Visit the store
              </a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </div>
          </div>

          <aside className={styles.factPanel} aria-label="Podcast details">
            {aboutHighlights.map((highlight) => (
              <div key={highlight.label}>
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className={styles.storySection}>
        <div>
          <p className={styles.eyebrow}>Week to week</p>
          <h2>Insightful analysis, commentary, and discussion of Florida Gators football.</h2>
        </div>

        <div className={styles.storyBody}>
          <p>
            GNFP follows the season as it happens, giving Gator fans a steady
            place for roster context, game reaction, opponent talk, and the
            bigger picture around Florida football.
          </p>
          <ul>
            {aboutPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contactBand}>
        <div>
          <p className={styles.eyebrow}>Support and contact</p>
          <h2>Thank you for supporting the show.</h2>
          <p>
            Reach the podcast anytime at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>

        <div className={styles.linkGrid}>
          <a href={patreonUrl} target="_blank" rel="noopener noreferrer">
            Patreon
          </a>
          <a href={storeUrl} target="_blank" rel="noopener noreferrer">
            Store
          </a>
          <Link href="/#contact">Contact form</Link>
        </div>
      </section>
    </main>
  );
}
