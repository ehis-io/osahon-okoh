import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.tagline}>Certified Management Consultant</span>
                    <h1 className={styles.title}>Osahon Okoh</h1>
                    <p className={styles.subtitle}>
                        A strategic leader and policy advisor bridging government, private sector, and civil society with a focus on impact-driven projects and organizational excellence.
                    </p>
                    <div>
                        <a href="#contact" className="btn btn-primary">Get in Touch</a>
                        <a href="#experience" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>View Experience</a>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <h3>7+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className={styles.metricItem}>
                            <h3>50+</h3>
                            <p>Projects Led</p>
                        </div>
                        <div className={styles.metricItem}>
                            <h3>2k+</h3>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    {/* Placeholder for now, user can replace with actual image */}
                    <div className={styles.imagePlaceholder}>
                        OO
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
