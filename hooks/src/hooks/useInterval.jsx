import { useEffect, useRef } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-interval.md

export default function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => {
            savedCallback.current()
        }

        if (delay !== null) {
            const id = setInterval(tick, delay)

            return () => {
                clearInterval(id)
            }
        }
    }, [delay])
}