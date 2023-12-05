import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Image src="/logos.png" alt="Logo" width={150} height={150} />
                <p> Zapraszamy do kontaktu z nami poprzez <a href='https://www.facebook.com/rzeszowscy.programisci/'>Facebook</a></p>
            </div>
        </footer>
    );
};


export default Footer;