"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending message..." : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactRequest, initialState);

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      aria-label="Contact Gator Nation Football Podcast"
    >
      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label>
        Topic
        <input
          name="topic"
          type="text"
          placeholder="Sponsorship, guest idea, listener note..."
          required
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Send a note to the GNFP team."
          required
        />
      </label>

      <SubmitButton />

      {state.message ? (
        <p
          className={state.ok ? styles.successMessage : styles.errorMessage}
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
