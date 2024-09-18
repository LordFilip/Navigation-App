/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams] = useSearchParams();
  /*
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");*/

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
