import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Get in Touch</h2>
                    <p>Open for collaborations, speaking engagements, and consulting opportunities.</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.card}>
                        <h3>Location</h3>
                        <p className={styles.location}>Benin City, Edo State, Nigeria</p>
                    </div>
                    <div className={styles.card}>
                        <h3>LinkedIn</h3>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Connect with Osahon
                        </a>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>500+ connections</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Email</h3>
                        <a href="mailto:contact@osahonokoh.com" className={styles.link}>
                            contact@osahonokoh.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
