import Image from 'next/image';
import styles from '../styles/page.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import axios from 'axios'; // import biblioteki Axios do wykonywania zapytan http
import { useState } from 'react'; //  hook 'useState' z React , pozwala na korzystanie ze stanu w komponencie funkcyjnym
import Playlisty from '../components/Playlist';
import Footer from '../components/Footer';
import React from 'react';



export default function Home({ searchData }) { // dane poczatkowe 'searchData' - na starcie puste
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // 'useState' hook React , ktory pozwala na korzystanie ze stanu w komponencie funkcyjnym.
  // 'searchTerm' przechowuje aktualny wpisany termin wyszukiwania
  // 'searchResult' przechowuje wyniki wyszukiwania
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [selectedSong, setSelectedSong] = useState(null);
  // 'platlists' przechowuje listę playlist, która jest dynamicznie aktualizowana w miarę dodawania nowych playlist.
  // 'newPlaylistName' przechowuje nazwę nowej playlisty wprowadzoną przez użytkownika w inpucie.
  //'selectedSong' stan do przechowywania wybranej piosenki, która ma zostać dodana do playlisty
  const [showPlayer, setShowPlayer] = useState(false);
  // 'showPlayer, setShowPlayer' stan do okreslania czy komponent odtwarzacza jest widoczny


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

  const handleCreatePlayliste = () => {
    if (newPlaylistName.trim() !== '') { // sprawdzanie czy input jest pusty
      const newPlaylist = { name: newPlaylistName, tracks: [] };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName(''); // Czyszczenie inputu po dodaniu playlisty
    }
  }
  // FUNKDCJA handleCreatePlaylist Funkcja tworząca playliste

  const handleAddToPlaylist = (song) => {
    if (selectedSong !== null) {
      const selectedPlaylistName = prompt("Podaj nazwę playlisty, do której chcesz dodać utwór:");

      if (selectedPlaylistName !== null) {
        const playlistIndex = playlists.findIndex(playlist => playlist.name === selectedPlaylistName);

        if (playlistIndex !== -1) {
          const updatedPlaylists = [...playlists]; // tworzenie kopi playtlisty
          updatedPlaylists[playlistIndex].tracks.push(song); // pushowanie kawalka do playlisty
          setPlaylists(updatedPlaylists); // aktulizacjas stanu komponentu playlists
          console.log("Dodano utwór do playlisty:", song);
        } else {
          alert(`Nie znaleziono playlisty o nazwie: ${selectedPlaylistName}`);
        }
      } else {
        console.log("Anulowano dodawanie do playlisty.");
      }
    } else {
      console.log("Nie wybrano utworu do dodania do playlisty.");
    }
  };

  const handleShowPlayer = (song) => {
    setSelectedSong(song);
    setShowPlayer(true);
  };

  const handleHidePlayer = () => {
    setShowPlayer(false);
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
            <br />
            <input
              placeholder="Nazwa nowej playlisty"
              type="text"
              style={{ textAlign: 'center', width: '300px', height: '40px' }}
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            /> {/* Input z metoda tworzenia nowych playlist */}
            <button onClick={handleCreatePlayliste}>Stwórz playlistę</button> {/* Button z metoda tworzenia playlisty */}
            {showPlayer && selectedSong && (
              <div>
                <h2>{selectedSong.artistName} -{selectedSong.trackName}</h2>
                <audio controls>
                  <source src={selectedSong.previewUrl} />
                </audio>
                <button onClick={handleHidePlayer}>Zamknij odtwarzacz</button>
              </div>
            )}
            <Playlisty playlists={playlists} />



            {searchResults.map((item) => (
              <article key={item.trackId}>
                <img src={item.artworkUrl100} alt={item.trackName} />
                <h4>{item.artistName}</h4>
                <h4>{item.trackName}</h4>
                <button onClick={() => handleShowPlayer(item)}>Odtworz</button>
                <button onClick={() => { setSelectedSong(item); handleAddToPlaylist(item); }}>Dodaj do playlisty</button>

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
      <Footer />
    </div>

  );
}