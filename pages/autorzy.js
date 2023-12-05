import React from 'react';
import Header from '../components/Header';
import styles from '../styles/autorzy.module.css';

const Autorzy = () => {
    return (
        <div>
            <Header />
            <h1 className={styles.title}>Strona Autorzy</h1>
            <div className={styles.authorContainer}>
                <div className={styles.author}>
                    <img src="/matilogo.jpg" alt="Mati" className={styles.authorImage} />
                    <h2> Mateusz </h2>
                    <p>Krotki opis</p>
                </div>
                <div className={styles.author}>
                    <img src="/karollogo.jpg" alt="Karol" className={styles.authorImage} />
                    <h2> Karol </h2>
                    <p>Krotki opis</p>
                </div>
            </div>

        </div>
    );
};

export default Autorzy;