import { useEffect } from "react"

// https://www.30secondsofcode.org/react/s/use-click-inside/

export default function useClickInside(ref, callback) {
    const handleClick = e => {
        if (ref.current && ref.current.contains(e.target)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}