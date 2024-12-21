'use client';

import Image from 'next/image';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from './map.module.css';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 48.9739,
    lng: 2.17815,
};

export default function Map(): JSX.Element {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        console.error("Google Maps API key is missing!");
        return <div>Error: Missing Google Maps API key</div>;
    }

    return (
        <section className={styles.section_map}>
            <h2>Carte & Horaires</h2>
            <a target='_blank' href="https://www.google.fr/maps/place/La+P'tite+Taverne/@48.9683424,2.1600307,14.36z/data=!4m10!1m2!2m1!1sla+pt'ite+tavern!3m6!1s0x47e661a0d6113b35:0x597b80010c1c8d95!8m2!3d48.9704529!4d2.1806255!15sChBsYSBwJ3RpdGUgdGF2ZXJuWhIiEGxhIHAgdGl0ZSB0YXZlcm6SARFmcmVuY2hfcmVzdGF1cmFudOABAA!16s%2Fg%2F11y9r4ljlz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                21 Quai de Seine, 95530 La Frette-sur-Seine
            </a>
            <div>
                <div className={styles.hours}></div>
                <div className={styles.map}>
                    <div className={styles.image_container}>
                        <Image className='anim_img_bg' src={'/assets/images/map.png'} alt={'map'} width={900} height={900} />
                    </div>
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore blanditiis illum commodi laborum ratione, asperiores eum eaque labore quasi maxime error culpa esse aut expedita ducimus molestias alias libero!</p>
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