import React, { useContext } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { GlobalContext } from '../../Contexts';
const NormalMap = () => {
    const { activeTrip: { startLocations, endLocations } } = useContext(GlobalContext);
    console.log(startLocations, endLocations)
    return (
        <MapContainer center={[startLocations[0].location.coordinates[1], endLocations[1].location.coordinates[0]]} zoom={10} scrollWheelZoom={false} style={{ height: '400px', margin: '50px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={startLocations[0].location.coordinates.reverse()}></Marker>
            <Marker position={startLocations[1].location.coordinates.reverse()}></Marker>
            <Marker position={endLocations[0].location.coordinates.reverse()}></Marker>
            <Marker position={endLocations[1].location.coordinates.reverse()}></Marker>
        </MapContainer>
    );
}

export default NormalMap;