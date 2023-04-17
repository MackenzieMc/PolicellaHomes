
import { useEffect, useRef } from "react";

function MyMapComponent() {

    const center = {lat: -74, lng: 40.7}
    const zoom = 9
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div ref={ref} id="map" />;
}

export default MyMapComponent