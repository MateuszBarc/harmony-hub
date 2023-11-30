import Image from 'next/image';
import styles from '../styles/page.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import axios from 'axios'; // import biblioteki Axios do wykonywania zapytan http
import { useState } from 'react'; //  hook 'useState' z React , pozwala na korzystanie ze stanu w komponencie funkcyjnym



export default function Home({ searchData }) { // dane poczatkowe 'searchData' - na starcie puste
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResults, setSearchResults] = useState([]);
// 'useState' hook React , ktory pozwala na korzystanie ze stanu w komponencie funkcyjnym.
// 'searchTerm' przechowuje aktualny wpisany termin wyszukiwania
// 'searchResult' przechowuje wyniki wyszukiwania
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${searchTerm}&entity=song`
      );
      const data = response.data.results;
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data from iTunes API:', error.message);
      setSearchResults([]);
    }
 // 'handleSearch' to funkcja wywolywana po nacisnieciu przycisku "Szukaj"
 // wysyła zapytanie do iTunes API w zaleznosci od aktualnego 'searchTerm'
 // i aktualizuje 'searchResults' z wynikami wyszukiwania

  };

  return (
    <div>
      <Header /> {/* Tutaj Karolku jest Menu Nawigacyjne z Logiem*/}
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <h1 style={{ textAlign: 'center' }}>Wyszukiwarka</h1>
            <input placeholder="Wpisz Utwór/Artyste/Gatunek"
              type="text"
              style={{ textAlign: 'center', width: '300px', height: '40px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Szukaj</button>
            {searchResults.map((item) => (
              <article key={item.trackId}> 
                <img src={item.artworkUrl100} alt={item.trackName} />
                <h4>{item.artistName}</h4>
                <h4>{item.trackName}</h4>
                <audio controls>
                  <source src={item.previewUrl} />
                </audio>
              </article>
            ))}
            {/*
            item.trackId => unikalny identyfikator utworu w bazie danych iTunes
            item.artworkUrl100 => adres URL obrazka z okladki albumu w rozmiarze 100x100 pikseli
            item.artistName => nazwa artysty danego utworu
            item.trackName => nazwa samego utworu
            item.previewUrl = > adres URL do krotkiego fragmentu audio utworu , ktory mozna odtworzyc
            */}
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
