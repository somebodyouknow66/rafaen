import { useState } from 'react';
import Reveal from './Reveal';
import styles from '../modules/Contact.module.css';

export default function Contact({ onToast }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enquiry: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onToast('✦ Your message has been sent to RAAFÉN');

    setForm({
      firstName: '',
      lastName: '',
      email: '',
      enquiry: '',
      message: '',
    });
  };

  const set = (k) => (e) =>
    setForm((f) => ({
      ...f,
      [k]: e.target.value,
    }));

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.grid}>
          <Reveal direction="left">
            <span className={styles.label}>
              Reach RAAFÉN
            </span>

            <h2 className={`${styles.heading} gs gs-slow`}>
              RAAFÉN
              <br />
              Atelier
            </h2>

            <p className={styles.tagline}>
              Maison &amp; Private Consultation
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'rgba(200,190,175,0.4)',
                marginBottom: 40,
              }}
            >
              Whether you seek a bespoke fragrance consultation or wish
              to explore RAAFÉN privately, our concierge team is at your
              exclusive service.
            </p>

            {[
              {
                icon: '📍',
                label: 'Atelier',
                val: '42 Rue du Faubourg Saint-Honoré\n75008 Paris, France',
              },
              {
                icon: '✉',
                label: 'Email',
                val: 'concierge@raafen.com',
              },
              {
                icon: '☎',
                label: 'Private Line',
                val: '+33 1 42 68 53 00',
              },
            ].map(({ icon, label, val }) => (
              <div
                className={styles.item}
                key={label}
              >
                <div className={styles.icon}>
                  {icon}
                </div>

                <div>
                  <div className={styles.itemLabel}>
                    {label}
                  </div>

                  <div
                    className={styles.itemVal}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {val}
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.socials}>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              <a
                href="#"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="#"
                className={styles.socialLink}
                aria-label="Pinterest"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.62-.31-1.54c0-1.45.84-2.53 1.87-2.53.88 0 1.31.66 1.31 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.5 1.85 1.5 1.85 1.8 0 3.19-1.9 3.19-4.63 0-2.42-1.74-4.11-4.22-4.11-2.88 0-4.56 2.16-4.56 4.39 0 .87.33 1.8.75 2.31.08.1.09.19.07.29-.08.31-.25 1.02-.28 1.16-.04.19-.14.23-.32.14-1.25-.58-2.03-2.42-2.03-3.89 0-3.15 2.29-6.05 6.6-6.05 3.47 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.3-1.15l-.62 2.33c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.formRow}>
                <div className={styles.group}>
                  <label className={styles.formLabel}>
                    First Name
                  </label>

                  <input
                    type="text"
                    className={styles.input}
                    placeholder="First name"
                    value={form.firstName}
                    onChange={set('firstName')}
                    required
                  />
                </div>

                <div className={styles.group}>
                  <label className={styles.formLabel}>
                    Last Name
                  </label>

                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={set('lastName')}
                    required
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label className={styles.formLabel}>
                  Email Address
                </label>

                <input
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={set('email')}
                  required
                />
              </div>

              <div className={styles.group}>
                <label className={styles.formLabel}>
                  Enquiry Type
                </label>

                <select
                  className={styles.select}
                  value={form.enquiry}
                  onChange={set('enquiry')}
                >
                  <option value="">Select enquiry</option>
                  <option>Private Consultation</option>
                  <option>Bespoke Fragrance</option>
                  <option>Corporate Gifting</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className={styles.group}>
                <label className={styles.formLabel}>
                  Your Message
                </label>

                <textarea
                  className={styles.textarea}
                  placeholder="Tell RAAFÉN your vision…"
                  value={form.message}
                  onChange={set('message')}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submit}
              >
                Send to RAAFÉN
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};