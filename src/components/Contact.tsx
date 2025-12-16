import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Engagement</h2>
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
                            Connect on LinkedIn
                        </a>
                    </div>
                    <div className={styles.card}>
                        <h3>Email</h3>
                        <a href="mailto:osahonokoh@gmail.com" className={styles.link}>
                            osahonokoh@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
