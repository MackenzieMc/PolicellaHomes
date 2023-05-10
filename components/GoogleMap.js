import { GoogleMap } from '@react-google-maps/api';

function Map({ DevelopmentsData }) {

    return <GoogleMap zoom={15} center={{lat: DevelopmentsData.lat, lng: DevelopmentsData.lng}}mapContainerClassName="mapContainer"></GoogleMap>
}

export default Map