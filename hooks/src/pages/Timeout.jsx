import { useState } from 'react';
import useTimeout from '../hooks/useTimeout';

// sadece bir defa çalışıyor

function Timeout() {
    const [seconds, setSeconds] = useState(0)

    useTimeout(() => {
        setSeconds(seconds + 1)
    }, 1000)

    return <p>{seconds}</p>
}

export default Timeout