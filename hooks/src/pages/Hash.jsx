import { useEffect } from "react";
import useHash from "../hooks/useHash";

function Hash() {
    const [hash, setHash] = useHash()

    useEffect(() => {
        setHash('#list')
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <p>window.location.href: {window.location.href}</p>
            <p>Edit hash: </p>
            <input value={hash} onChange={e => setHash(e.target.value)} />
        </>
    )
}

export default Hash