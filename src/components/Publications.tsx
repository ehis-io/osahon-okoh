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
                        <h3>Navigating Governance</h3>
                        <p>A reflection on public service delivery, policy implementation, and the realities of governance in Nigeria.</p>
                        <a href="#" className={styles.readMore}>Read Essay &rarr;</a>
                    </div>
                    <div className={styles.item}>
                        <h3>Transformation is a Marathon</h3>
                        <p>Insights into sustainable change management and the long-term nature of institutional reform.</p>
                        <a href="#" className={styles.readMore}>Read Brief &rarr;</a>
                    </div>
                    <div className={styles.item}>
                        <h3>Newsletter Archive</h3>
                        <p>Weekly thoughts on policy, leadership, and technology.</p>
                        <a href="#" className={styles.readMore}>Browse Archive &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
