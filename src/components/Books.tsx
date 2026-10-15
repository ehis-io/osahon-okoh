import Image from 'next/image';
import styles from './Books.module.css';

const Books = () => {
    return (
        <section id="books" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Books</h2>
                <div className={styles.grid}>
                    <div className={styles.bookCard}>
                        <a
                            href="https://bit.ly/twothingscanbetrue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bookCover}
                            aria-label="Buy Two Things Can Be True on Selar"
                        >
                            <Image
                                src="/two-things-can-be-true.jpg"
                                alt="Two Things Can Be True book cover"
                                width={800}
                                height={800}
                                className={styles.coverImage}
                            />
                        </a>
                        <div className={styles.bookInfo}>
                            <span className={styles.badge}>Out Now</span>
                            <h3>Two Things Can Be True</h3>
                            <p className={styles.genre}>Novel</p>
                            <p className={styles.description}>
                                What if the most honest thing you could say about your life is that two completely
                                opposite things are true at the same time? A bold, intimate novel that refuses to look
                                away from life&apos;s contradictions, told through four young Nigerian men, each caught
                                between worlds, expectations, and versions of themselves.
                            </p>
                            <a
                                href="https://bit.ly/twothingscanbetrue"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className={styles.bookCard}>
                        <div className={styles.bookCover}>
                            <Image
                                src="/capability-wealth-teaser.svg"
                                alt="Capability Wealth book cover, coming soon"
                                width={800}
                                height={800}
                                className={styles.coverImage}
                            />
                        </div>
                        <div className={styles.bookInfo}>
                            <span className={`${styles.badge} ${styles.badgeSoon}`}>Coming Soon</span>
                            <h3>Capability Wealth</h3>
                            <p className={styles.genre}>Next Book</p>
                            <p className={styles.description}>
                                The next book from Osahon Okoh is on its way. Stay tuned for the release.
                            </p>
                            <a href="#contact" className="btn btn-secondary">Get Updates</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Books;
