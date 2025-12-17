import styles from './PolicyAdvisory.module.css';

const PolicyAdvisory = () => {
    return (
        <section id="policy-advisory" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Policy Advisory Services</h2>
                    <p className={styles.subtitle}>Strategic guidance for government, private sector, and civil society.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Services</h3>
                        <ul className={styles.list}>
                            <li>Strategic Policy Development</li>
                            <li>Stakeholder Engagement</li>
                            <li>Program Implementation</li>
                            <li>Impact Assessment</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Process</h3>
                        <ul className={styles.list}>
                            <li>Discovery & Research</li>
                            <li>Strategy Formulation</li>
                            <li>Implementation Planning</li>
                            <li>Monitoring & Evaluation</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3>Focus Areas</h3>
                        <ul className={styles.list}>
                            <li>Public Sector Reform</li>
                            <li>Economic Development</li>
                            <li>Social Impact</li>
                            <li>Digital Transformation</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.ctaContainer}>
                    <p>Ready to create meaningful impact?</p>
                    <a href="#contact" className="btn btn-primary">Work With Me</a>
                </div>
            </div>
        </section>
    );
};

export default PolicyAdvisory;
