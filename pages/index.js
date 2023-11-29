import Image from 'next/image';
import styles from '../styles/page.module.css';
import Header from '../components/Header';
import Link from 'next/link';



export default function Home() {
  return (
    <div>
      <Header /> {/* Tutaj Karolku jest Menu Nawigacyjne z Logiem*/}
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <h1 style={{ textAlign: 'center' }}>Wyszukiwarka</h1>
            <input placeholder="Wpisz Utwór/Artyste/Gatunek" type="text" style={{ textAlign: 'center', width: '300px', height: '40px' }} />
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/HarmonyHubBG.jpg"
            alt="Next.js Logo"
            width={450}
            height={250}
            priority
          />
        </div>

        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
