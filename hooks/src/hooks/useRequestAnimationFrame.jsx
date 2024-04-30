import { useRef, useEffect } from "react";

// https://www.30secondsofcode.org/react/s/use-request-animation-frame/

export default function useRequestAnimationFrame(callback) {
    const requestRef = useRef()
    const previousTimeRef = useRef()

    useEffect(() => {
        const animate = time => {
            if (previousTimeRef.current)
                callback(time - previousTimeRef.current)

            previousTimeRef.current = time
            requestRef.current = requestAnimationFrame(animate)
        }
        requestRef.current = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(requestRef.current)
        }
    }, [callback])
}