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
                    <li><Link href="#policy-advisory" className={styles.navLink}>Advisory</Link></li>
                    <li><Link href="#ai-governance" className={styles.navLink}>AI Governance</Link></li>
                    <li><Link href="#books" className={styles.navLink}>Books</Link></li>
                    <li><Link href="#publications" className={styles.navLink}>Writing</Link></li>
                    <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
