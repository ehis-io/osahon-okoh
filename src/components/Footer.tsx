import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                    <a href="#" className={styles.socialLink}>Instagram</a>
                </div>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Osahon Okoh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
