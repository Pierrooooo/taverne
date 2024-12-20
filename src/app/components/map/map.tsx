'use client';

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
        <div className={styles.map}>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10} // Adjust zoom level
                >
                    {/* Additional map features/components can go here */}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}