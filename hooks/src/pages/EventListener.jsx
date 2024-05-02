import { useCallback, useState } from 'react'
import useEventListener from '../hooks/useEventListener';

function EventListener() {
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const updateCoords = useCallback(
        ({ clientX, clientY }) => {
            setCoords({ x: clientX, y: clientY })
        },
        [setCoords]
    );

    useEventListener('mousemove', updateCoords)

    return (
        <p>Mouse coordinates: {coords.x}, {coords.y}</p>
    )
}

export default EventListener