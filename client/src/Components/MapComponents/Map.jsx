import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
const Map = ({ startLat, startLon, endLat, endLon }) => {
    return (
        <MapContainer center={[(startLat + endLat) / 2, (startLon + endLon) / 2]} zoom={10} scrollWheelZoom={false} style={{ height: '500px', margin: '50px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutingMachine startLat={startLat} endLat={endLat} startLon={startLon} endLon={endLon} />
        </MapContainer>
    );
}

export default Map;