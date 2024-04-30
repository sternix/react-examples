import { useState } from 'react'
import usePrevious from '../hooks/usePrevious';

function Previous() {
    const [value, setValue] = useState(0)
    const lastValue = usePrevious(value)

    return (
        <div>
            <p>
                Current: {value} - Previous: {lastValue}
            </p>
            <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
    )
}

export default Previous