import React from 'react';
import { useRouter } from 'next/router';

const Playlisty = ({ playlists: initialPlaylists = [] }) => {

    return (
        <div>

            <h1 style={{ textAlign: 'center' }}>Twoje Playlisty</h1>

            {/* Tutaj Karolku Komponent z playlistami */}
            <div>
                {initialPlaylists.map((playlist, index) => (
                    <div key={index}>
                        <h3 style={{ border: 'solid red', textAlign: 'center', textTransform: 'uppercase' }}>{playlist.name}</h3>
                        <ul style={{ border: '2px solid', listStyle: 'none', padding: 0 }}>
                            {playlist.tracks.map((song, songIndex) => (
                                <li key={songIndex}>
                                    <div>
                                        <img src={song.artworkUrl100} alt={song.trackName} />
                                        <h4>{song.artistName}</h4>
                                        <h4>{song.trackName}</h4>
                                        <audio controls>
                                            <source src={song.previewUrl} />
                                        </audio>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Playlisty;