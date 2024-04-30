import { useEffect, useRef } from "react";

// https://www.30secondsofcode.org/react/s/use-on-window-scroll/

export default function useOnWindowScroll(callback) {
    const listener = useRef(null)

    useEffect(() => {
        if (listener.current)
            window.removeEventListener('scroll', listener.current)

        listener.current = window.addEventListener('scroll', callback)

        return () => {
            window.removeEventListener('scroll', listener.current)
        }
    }, [callback])
}
