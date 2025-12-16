import styles from './Testimonials.module.css';

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Impact & Endorsements</h2>
                    <p>Trusted by leaders in government and the private sector.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <p className={styles.quote}>
                            Osahon’s strategic insight was instrumental in reshaping our policy framework. His ability to bridge the gap between public sector constraints and private sector efficiency is unmatched.
                        </p>
                        <div className={styles.author}>
                            <div className={styles.authorInfo}>
                                <h4>Senior Government Official</h4>
                                <p>Edo State Government</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.quote}>
                            A true professional who brings clarity to complex organizational challenges. His leadership in the STEM education initiative created lasting value for our community.
                        </p>
                        <div className={styles.author}>
                            <div className={styles.authorInfo}>
                                <h4>Program Director</h4>
                                <p>International Development Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
