'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';


L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Chargement dynamique du composant MapContainer pour éviter les erreurs côté serveur
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function MapLeaflet(): JSX.Element {
  const position: [number, number] = [48.9704529, 2.1806255];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            La P'tite Taverne <br /> 21 Quai de Seine, 95530 La Frette-sur-Seine
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
