import { useRef, useEffect } from "react";

// https://www.30secondsofcode.org/react/s/use-event-listener/

export default function useEventListener(type, handler, el = window) {
    const savedHandler = useRef()

    useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const listener = e => savedHandler.current(e)

        el.addEventListener(type, listener)

        return () => {
            el.removeEventListener(type, listener)
        }
    }, [type, el])
};
