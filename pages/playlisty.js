import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const Playlisty = ({ playlists: initialPlaylists = [] }) => {

    const router = useRouter();
    const { playlists } = router.query;

    const handleCreatePlayliste = () => {
        console.log("Stworz playliste");
    }

    return (
        <div>
            <Header />
            <h1>Twoje Playlisty</h1>

            {/* Tutaj Karolku strony z playlistami */}

        </div>

    );
};

export default Playlisty;