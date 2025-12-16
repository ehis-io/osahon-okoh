import styles from './Publications.module.css';

const Publications = () => {
    return (
        <section id="publications" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Publications & Thought Leadership</h2>
                </div>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <h3>Navigating Governance: My Memoir of Four Years in the Public Sector</h3>
                        <p>A reflection on public service delivery, policy implementation, and the realities of governance in Nigeria.</p>
                    </div>
                    <div className={styles.item}>
                        <h3>Transformation is a Marathon, Not a Sprint: Navigating Governance and Initiatives</h3>
                        <p>Insights into sustainable change management and the long-term nature of institutional reform.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
