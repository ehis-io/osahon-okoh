import styles from './Publications.module.css';

const Publications = () => {
    return (
        <section id="publications" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Writing & Resources</h2>
                </div>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <h3>Navigating Governance: My Memoir of Four Years of Service in the Public Sector</h3>
                        <p>Four years into working in government, a reflection on the highs and lows of the journey and the nuances of governance seen from the inside.</p>
                        <a
                            href="https://www.linkedin.com/pulse/navigating-governance-my-memoir-four-years-service-public-okoh-mpm-nukye/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.readMore}
                        >
                            Read on LinkedIn &rarr;
                        </a>
                    </div>
                    <div className={styles.item}>
                        <h3>Transformation is a Marathon, Not a Sprint: Navigating Governance and Initiatives</h3>
                        <p>Why government reform needs both quick wins and long-term institutional building, and how leaders can balance the two to deliver change that outlasts an administration.</p>
                        <a
                            href="https://www.linkedin.com/pulse/transformation-marathon-sprint-navigating-governance-osahon-okoh-mpm-dzilf/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.readMore}
                        >
                            Read on LinkedIn &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
