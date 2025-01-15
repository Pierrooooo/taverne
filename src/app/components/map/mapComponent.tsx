'use client';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  let markerIcon = new L.Icon({ iconUrl: "/assets/icons/marker.png", iconSize: [40, 40], iconAnchor: [20, 20], });
  const position = [48.9704529, 2.1806255];
  return (
    <Map center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>La P`&rsquo;`tite Taverne</Popup>
      </Marker>
    </Map>
  );
};

export default MapComponent;
