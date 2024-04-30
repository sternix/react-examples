import { useEffect, useRef } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-timeout.md

export default function useTimeout(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => {
            savedCallback.current()
        }

        if (delay !== null) {
            const id = setTimeout(tick, delay)

            return () => {
                clearTimeout(id)
            }
        }
    }, [delay])
}