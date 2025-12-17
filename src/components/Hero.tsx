import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.tagline}>Policy Advisor & Author</span>
                    <h1 className={styles.title}>Osahon Okoh</h1>
                    <p className={styles.subtitle}>
                        Bridging government, private sector, and civil society with 10+ years of expertise in policy advisory and organizational strategy.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="#contact" className="btn btn-primary">Work With Me</a>
                        <a href="#policy-advisory" className={`${styles.outlineBtn}`}>View Services</a>
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
