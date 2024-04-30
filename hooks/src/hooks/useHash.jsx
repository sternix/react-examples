import { useEffect, useCallback, useState } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-hash.md

export default function useHash() {
    const [hash, setHash] = useState(() => window.location.hash)

    useEffect(() => {
        const hashChangeHandler = () => setHash(window.location.hash)

        window.addEventListener('hashchange', hashChangeHandler)

        return () => {
            window.removeEventListener('hashchange', hashChangeHandler)
        }
    }, [])

    const updateHash = useCallback(
        newHash => {
            if (newHash !== hash)
                window.location.hash = newHash
        },
        [hash]
    )

    return [hash, updateHash]
}