import Image from 'next/image';
import styles from './page.module.css';


export default function Home() {
  return (
    <div>

      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <h1 style={{ textAlign: 'center' }}>Wyszukiwarka</h1>
            <input placeholder="Wpisz Utwór/Artyste/Gatunek" type="text" style={{ textAlign: 'center', width: '300px', height: '40px' }} />
          </div>

          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/HarmonyHubLog.jpg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={80}
                priority
              />
            </a>
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
