import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactCta.module.css";

export default function ContactCta() {
  return (
    <section className={styles.contactSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Contact</p>
        <h2>Send a note to the podcast.</h2>
        <p>
          Reach out about sponsorships, guest ideas, listener questions, or
          anything else the GNFP team should see.
        </p>
      </div>

      <div className={styles.formWrap}>
        <ContactForm />
      </div>
    </section>
  );
}
