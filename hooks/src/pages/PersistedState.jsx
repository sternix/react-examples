import { useState } from 'react'
import usePersistedState from '../hooks/usePersistedState';


function MyComponent({ name }) {
    const [val, setVal] = usePersistedState(name, 10)
    return (
        <input
            value={val}
            onChange={e => setVal(e.target.value)}
        />
    )
}

function PersistedState() {
    const [name, setName] = useState('my-value');
    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <MyComponent name={name} />
        </>
    )
}

export default PersistedState