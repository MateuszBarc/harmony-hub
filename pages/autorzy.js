import React from 'react';
import Header from '../components/Header';
import styles from '../styles/autorzy.module.css';

const Autorzy = () => {
    return (
        <div>
            <Header />

            <div className={styles.authorContainer}>
                <div className={styles.author}>
                    <img src="/matilogo.jpg" alt="Mati" className={styles.authorImage} />
                    <h2> Mateusz </h2>
                    <p>Witaj! Jestem pasjonatem programowania z różnorodnym doświadczeniem i wszechstronnymi zainteresowaniami.
                        Z wykształcenia jestem absolwentem studiów pierwszego stopnia na Wyższej Szkole Informatyki i Zarządzania w Rzeszowie, gdzie
                        zdobyłem solidne podstawy informatyki i programowania. Moja przygoda z technologią rozpoczęła się już w technikum elektronicznym w Rzeszowie,
                        gdzie zdobyłem tytuł technika informatyka.</p>
                </div>
                <div className={styles.author}>
                    <img src="/karollogo.jpg" alt="Karol" className={styles.authorImage} />
                    <h2> Karol </h2>
                    <p>Cześć! Jestem Karol, trochę taki elektronik z Rzeszowa. Ukończyłem Technikum Elektroniczne, gdzie zdobyłem tytuł technika.Elektrotechnika to moje klimaty, a informatyka to taka druga natura.
                        Z programowaniem zacząłem trochę ponad rok temu. No i poleciałem w świat JavaScriptu, Reacta i Next.js. Razem z ziomkami pracowaliśmy nad projektem HarmonyHub - trochę kodowania, trochę burzy mózgów, no i efekty są.
                        Mówią, że jestem rzetelny i skoncentrowany, staram się! Jak wpadam w wir kodowania, to czasem trudno mnie wyciągnąć, ale kto z nas nie ma takich chwil, prawda?</p>
                </div>
            </div>

        </div>
    );
};

export default Autorzy;