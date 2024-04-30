import { useEffect, useState } from "react"

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-navigator-on-line.md

const getOnLineStatus = () =>
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
        ? navigator.onLine
        : true;

export default function useNavigatorOnLine() {
    const [status, setStatus] = useState(getOnLineStatus())

    const handleOnline = () => setStatus(true)
    const handleOffline = () => setStatus(false)

    useEffect(() => {
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    return status
}

