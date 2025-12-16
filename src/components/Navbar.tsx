import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Osahon Okoh
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="#about" className={styles.navLink}>About</Link></li>
                    <li><Link href="#skills" className={styles.navLink}>Expertise</Link></li>
                    <li><Link href="#experience" className={styles.navLink}>Experience</Link></li>
                    <li><Link href="#education" className={styles.navLink}>Credentials</Link></li>
                    <li><Link href="#publications" className={styles.navLink}>Insights</Link></li>
                    <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
