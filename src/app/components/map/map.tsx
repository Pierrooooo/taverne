'use client';

import Image from 'next/image';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from './map.module.css';

// const containerStyle = {
//     width: '100%',
//     height: '500px',
// };

// const center = {
//     lat: 48.9739,
//     lng: 2.17815,
// };

export default function Map(): JSX.Element {
    // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    // if (!apiKey) {
    //     console.error("Google Maps API key is missing!");
    //     return <div>Error: Missing Google Maps API key</div>;
    // }

    return (
        <section className={styles.section_map}>
            <h2 className={`${styles.title} title_XL`}>Carte & Horaires</h2>
            <a className={`${styles.location} para_s`} target='_blank' href="https://www.google.fr/maps/place/La+P'tite+Taverne/@48.9683424,2.1600307,14.36z/data=!4m10!1m2!2m1!1sla+pt'ite+tavern!3m6!1s0x47e661a0d6113b35:0x597b80010c1c8d95!8m2!3d48.9704529!4d2.1806255!15sChBsYSBwJ3RpdGUgdGF2ZXJuWhIiEGxhIHAgdGl0ZSB0YXZlcm6SARFmcmVuY2hfcmVzdGF1cmFudOABAA!16s%2Fg%2F11y9r4ljlz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                21 Quai de Seine, 95530 <strong>La Frette-sur-Seine</strong>
            </a>
            <div className={styles.infos_map}>
                <div className={`${styles.hours} para_s`}>
                    <span className={styles.hours_line}>
                        <span>Mar :</span>
                        <span>17h - 23h00</span>
                    </span>
                    <span className={styles.hours_line}>
                        <span>Mer :</span>
                        <span>17h - 23h00</span>
                    </span>
                    <span className={styles.hours_line}>
                        <span>Jeu :</span>
                        <span>17h - 23h00</span>
                    </span>
                    <span className={styles.hours_line}>
                        <span>Ven :</span>
                        <span>17h - 23h00</span>
                    </span>
                    <span className={styles.hours_line}>
                        <span>Sam :</span>
                        <span>17h - 23h00</span>
                    </span>
                    <span className={styles.hours_line}>
                        <span>Dim :</span>
                        <span>17h - 23h00</span>
                    </span>
                </div>
                <div className={styles.map}>
                <a target='_blank' href="https://www.google.fr/maps/place/La+P'tite+Taverne/@48.9683424,2.1600307,14.36z/data=!4m10!1m2!2m1!1sla+pt'ite+tavern!3m6!1s0x47e661a0d6113b35:0x597b80010c1c8d95!8m2!3d48.9704529!4d2.1806255!15sChBsYSBwJ3RpdGUgdGF2ZXJuWhIiEGxhIHAgdGl0ZSB0YXZlcm6SARFmcmVuY2hfcmVzdGF1cmFudOABAA!16s%2Fg%2F11y9r4ljlz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    <Image className='anim_img_bg' src={'/assets/images/map.png'} alt={'map'} width={900} height={900} />
                </a>
                </div>
            </div>
            <p className={`${styles.text} para_s`}>Nous sommes ravis de vous accueillir dans notre restaurant ! Que ce soit pour un dîner entre amis, un repas en famille ou apéro entre collègues. Retrouvez-nous facilement grâce à la carte, et laissez-vous guider jusqu’à notre table pour une expérience culinaire mémorable. À très bientôt !</p>
            {/* <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript> */}
        </section>
    );
}