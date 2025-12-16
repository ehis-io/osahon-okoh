import styles from './Education.module.css';

const Education = () => {
    return (
        <section id="education" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Credentials & Qualifications</h2>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.sectionBlock}>
                        <h3>Credentials</h3>
                        <ul className={styles.compactList}>
                            <li>
                                <strong>Master’s in Project Management (MPM)</strong> — International Project Management Academy, Oakland, USA
                            </li>
                            <li>
                                <strong>Diploma in Innovation Management</strong> — International Business Management Institute (IBMI)
                            </li>
                            <li>
                                <strong>Certified Management Specialist</strong> — London Graduate School
                            </li>
                            <li>
                                <strong>Human Resource Management</strong> — IMF Institute, USA
                            </li>
                        </ul>
                    </div>

                    <div className={styles.sectionBlock}>
                        <h3>Community & Volunteering</h3>
                        <ul className={styles.compactList}>
                            <li>
                                <strong>TEDxAideyanSt</strong> — Curator
                            </li>
                            <li>
                                <strong>Living Your Dream Initiative</strong> — Volunteer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
