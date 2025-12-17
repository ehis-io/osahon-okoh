import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/osahonokoh/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="#" className={styles.link}>Twitter/X</a>
                    <a href="#" className={styles.link}>Instagram</a>
                </div>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Osahon Okoh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
