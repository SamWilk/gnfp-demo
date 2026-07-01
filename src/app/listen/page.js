import SiteHeader from "../_components/SiteHeader/SiteHeader";
import { spotifyShowId, spotifyShowUrl, youtubeUrl } from "../_data/podcast";
import styles from "./page.module.css";

export const metadata = {
  title: "Listen | Gator Nation Football Podcast",
  description:
    "Listen to recent Gator Nation Football Podcast episodes on Spotify from the GNFP site.",
};

export default function ListenPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Listen</p>
            <h1>Recent GNFP listening, centered on Spotify.</h1>
            <p className={styles.lede}>
              This page gives listeners a direct path into the GNFP audio feed
              while keeping YouTube available for the video side of the show.
            </p>
            <div className={styles.actions}>
              <a
                className={styles.primaryButton}
                href={spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Spotify show
              </a>
              <a
                className={styles.secondaryButton}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open YouTube
              </a>
            </div>
          </div>

          <div className={styles.playerWrap}>
            <iframe
              src={`https://open.spotify.com/embed/show/${spotifyShowId}?utm_source=generator&theme=0`}
              title="The Gator Nation Football Podcast on Spotify"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </section>

      <section className={styles.infoBand}>
        <div>
          <p className={styles.eyebrow}>Audio feed</p>
          <h2>The Spotify show page keeps recent episodes and playback in one place.</h2>
        </div>
        <p className={styles.bodyCopy}>
          Use this page as the audio-first destination for GNFP listeners. The
          Spotify embed handles recent show playback, while the separate
          episodes page stays focused on the latest YouTube upload.
        </p>
      </section>
    </main>
  );
}
