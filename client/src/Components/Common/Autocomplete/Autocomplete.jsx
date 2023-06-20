import React, { useContext } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import styles from './Autocomplete.module.css';
import { GlobalContext } from '../../../Contexts';

const Autocomplete = ({ value, setValue, placeholder }) => {
    const { currentLocation } = useContext(GlobalContext);
    const onPlaceSelect = (e) => {
        setValue(e);
    }
    return (
        <>
            {(currentLocation.longitude && currentLocation.latitude) ?
                (
                    <div className={styles.container}>
                        <GeoapifyContext apiKey="eb24188c7afb4832983f33e5fb729337">
                            <GeoapifyGeocoderAutocomplete
                                placeholder={placeholder}
                                value={value}
                                limit={5}
                                placeSelect={onPlaceSelect}
                                biasByLocation={{
                                    longitude: currentLocation?.longitude || 0,
                                    latitude: currentLocation?.latitude || 0
                                }}
                            />
                        </GeoapifyContext>
                    </div>
                ) : null}
        </>
    );
}

export default Autocomplete;