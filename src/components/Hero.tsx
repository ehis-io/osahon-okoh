import Image from 'next/image';
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
                    <div className={styles.ctaGroup}>
                        <a href="osahonokoh@gmail.com" className="btn btn-primary">Request Consultation</a>
                        <a href="#skills" className={`${styles.outlineBtn}`}>View Expertise</a>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className={styles.metricItem}>
                            <h3>50+</h3>
                            <p>Projects Led</p>
                        </div>

                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/osahon-main.jpg"
                        alt="Osahon Okoh"
                        fill
                        priority
                        className={styles.image}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
