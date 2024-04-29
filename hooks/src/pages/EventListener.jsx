import React from 'react'
import useEventListener from '../hooks/useEventListener';

function EventListener() {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });

    const updateCoords = React.useCallback(
        ({ clientX, clientY }) => {
            setCoords({ x: clientX, y: clientY });
        },
        [setCoords]
    );

    useEventListener('mousemove', updateCoords);

    return (
        <p>Mouse coordinates: {coords.x}, {coords.y}</p>
    );
}

export default EventListener