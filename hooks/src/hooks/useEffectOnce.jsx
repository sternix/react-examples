import { useEffect, useRef } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-effect-once.md

export default function useEffectOnce(callback, when) {
    const hasRunOnce = useRef(false);

    useEffect(() => {
        if (when && !hasRunOnce.current) {
            callback()
            hasRunOnce.current = true
        }
        // eslint-disable-next-line
    }, [when])
}