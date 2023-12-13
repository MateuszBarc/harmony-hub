import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.css';
{/* Tutaj Karolku jest Menu Nawigacyjne z Logiem*/ }
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/HarmonyHubLog.jpg"
                    alt="Logo HarmonyHub"
                    width={100}
                    height={80}
                />
            </div>
            <nav className={styles.nav}>
                <Link href="/">
                    Strona Główna
                </Link>
                <Link href="/autorzy">
                    Autorzy
                </Link>
            </nav>
        </header>
    );
}

export default Header;