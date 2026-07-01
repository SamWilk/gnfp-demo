import Link from "next/link";
import ContactCta from "./_components/ContactCta/ContactCta";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import {
  benefits,
  latestYouTubeEpisode,
  patreonUrl,
  spotifyShowUrl,
  youtubeUrl,
} from "./_data/podcast";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <section className={styles.hero} id="top" aria-label="GNFP landing page">
        <div className={styles.heroMedia} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <SiteHeader />

        <div className={styles.heroGrid} id="main">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Florida football, all signal</p>
            <h1>Gator Nation Football Podcast</h1>
            <p className={styles.lede}>
              Sharp weekly conversations for Florida fans who want the why
              behind every drive, roster move, matchup, and season storyline.
            </p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={patreonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Support the show
              </a>
              <Link className={styles.secondaryButton} href="/episodes">
                Browse episodes
              </Link>
              <a
                className={styles.secondaryButton}
                href={spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </a>
              <a
                className={styles.secondaryButton}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.episodeSection} id="episodes">
        <div className={styles.sectionHeader}>
          <SectionIntro
            eyebrow="Latest episode"
            title="A dedicated episodes page with the newest YouTube upload."
          />
        </div>

        <div className={styles.episodePreview}>
          <article className={styles.featuredEpisode}>
            <span>Verified {latestYouTubeEpisode.verifiedOn}</span>
            <h3>{latestYouTubeEpisode.title}</h3>
            <p>
              Watch the current upload on the new episodes page, then move
              through the regular GNFP postgame, roster, and preview formats.
            </p>
          </article>

          <div className={styles.episodeCtaPanel}>
            <div className={styles.panelCopy}>
              <p>New episode destination</p>
              <h3>
                Watch the embedded latest upload and jump out to YouTube when
                you need the full channel.
              </h3>
              <span>
                The dedicated episodes page keeps the newest post front and
                center, then lays out the regular GNFP formats below it.
              </span>
            </div>
            <div className={styles.previewActions}>
              <Link className={styles.primaryButton} href="/episodes">
                Open episodes page
              </Link>
              <a
                className={styles.secondaryButton}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open channel
              </a>
              <Link className={styles.secondaryButton} href="/listen">
                Open listen page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.membershipSection} id="membership">
        <div className={styles.membershipContent}>
          <SectionIntro
            eyebrow="Member feed"
            title="More room for the conversations regular listeners ask for."
          />
          <a
            className={styles.primaryButton}
            href={patreonUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Patreon
          </a>
        </div>

        <ul className={styles.benefitList}>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className={styles.closer}>
        <SectionIntro
          eyebrow="For the season ahead"
          title="One destination for episodes, Patreon support, and the GNFP community."
        />
      </section>

      <ContactCta />
    </main>
  );
}
