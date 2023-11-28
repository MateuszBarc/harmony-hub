import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/HarmonyHubLog.jpg"
                    alt="Logo"
                    width={100}
                    height={80}
                />
                <nav className={styles.nav}>
                    <Link href="/">
                        <a>Strona Głowna</a>
                    </Link>

                </nav>
            </div>
        </header>
    )
}