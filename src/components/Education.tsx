import styles from './Education.module.css';

const Education = () => {
    return (
        <section id="education" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Credentials & Qualifications</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.educationCard}>
                        <h3>Master’s in Project Management (MPM)</h3>
                        <p className="text-sm text-gray-600 mb-2">International Project Management Academy, Oakland, USA</p>
                    </div>
                    <div className={styles.educationCard}>
                        <h3>Diploma in Innovation Management</h3>
                        <p className="text-sm text-gray-600 mb-2">International Business Management Institute (IBMI)</p>
                    </div>
                    <div className={styles.educationCard}>
                        <h3>Certified Management Specialist</h3>
                        <p className="text-sm text-gray-600 mb-2">London Graduate School</p>
                    </div>
                    <div className={styles.educationCard}>
                        <h3>Human Resource Management</h3>
                        <p className="text-sm text-gray-600 mb-2">IMF Institute, USA</p>
                    </div>
                </div>

                <div className={styles.volunteering}>
                    <div className={styles.heading}>
                        <h2>Volunteering & Community</h2>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.educationCard}>
                            <h3>TEDxAideyanSt</h3>
                            <p className="font-bold text-secondary">Curator</p>
                            <p>Sharing local stories with global impact.</p>
                        </div>
                        <div className={styles.educationCard}>
                            <h3>Living Your Dream Initiative</h3>
                            <p className="font-bold text-secondary">Volunteer</p>
                            <p>Promoting social services and community engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
