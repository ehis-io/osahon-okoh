import styles from './Books.module.css';

const Books = () => {
    return (
        <section id="books" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Books & Publications</h2>
                <div className={styles.grid}>
                    <div className={styles.bookCard}>
                        <div className={styles.bookCover}>
                            <div className={styles.placeholderCover}>Masculinity in Flux</div>
                        </div>
                        <div className={styles.bookInfo}>
                            <h3>Redefining Masculinity</h3>
                            <p className={styles.genre}>Social Commentary</p>
                            <p className={styles.description}>Exploring the evolving role of men in modern african society and leadership.</p>
                            <a href="#" className="btn btn-secondary">Get Updates</a>
                        </div>
                    </div>
                    <div className={styles.bookCard}>
                        <div className={styles.bookCover}>
                            <div className={styles.placeholderCover}>Governance 2.0</div>
                        </div>
                        <div className={styles.bookInfo}>
                            <h3>Modern Governance</h3>
                            <p className={styles.genre}>Policy & Politics</p>
                            <p className={styles.description}>A blueprint for effective leadership in the public sector for the digital age.</p>
                            <a href="#" className="btn btn-secondary">Get Updates</a>
                        </div>
                    </div>
                    <div className={styles.bookCard}>
                        <div className={styles.bookCover}>
                            <div className={styles.placeholderCover}>Leading with Purpose</div>
                        </div>
                        <div className={styles.bookInfo}>
                            <h3>Leadership Notes</h3>
                            <p className={styles.genre}>Leadership</p>
                            <p className={styles.description}>Practical insights and strategies for emerging leaders.</p>
                            <a href="#" className="btn btn-secondary">Get Updates</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Books;
