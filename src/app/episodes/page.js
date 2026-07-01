import SiteHeader from "../_components/SiteHeader/SiteHeader";
import {
  episodes,
  latestYouTubeEpisode,
  youtubeUrl,
} from "../_data/podcast";
import styles from "./page.module.css";

export const metadata = {
  title: "Episodes | Gator Nation Football Podcast",
  description:
    "Watch the latest GNFP YouTube episode and explore the regular Florida football podcast formats.",
};

export default function EpisodesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Episodes</p>
            <h1>Watch the latest GNFP upload without leaving the site.</h1>
            <p className={styles.lede}>
              The newest YouTube episode is embedded below. This latest upload
              was verified on {latestYouTubeEpisode.verifiedOn}.
            </p>
            <div className={styles.actions}>
              <a
                className={styles.primaryButton}
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open YouTube channel
              </a>
            </div>
          </div>

          <div className={styles.videoWrap}>
            <iframe
              src={`https://www.youtube.com/embed/${latestYouTubeEpisode.videoId}`}
              title={latestYouTubeEpisode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className={styles.titleBand}>
        <p className={styles.eyebrow}>Current upload</p>
        <h2>{latestYouTubeEpisode.title}</h2>
      </section>

      <section className={styles.listSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Regular formats</p>
          <h2>The weekly rotation around the Florida football calendar.</h2>
        </div>

        <div className={styles.episodeList}>
          {episodes.map((episode, index) => (
            <article className={styles.episodeCard} key={episode.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{episode.tag}</p>
                <h3>{episode.title}</h3>
                <small>{episode.text}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
