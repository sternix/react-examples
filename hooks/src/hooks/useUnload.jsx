import { useEffect, useRef } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-unload.md
// doğru çalışmıyor

export default function useUnload(fn) {
    const cb = useRef(fn)

    useEffect(() => {
        const onUnload = cb.current

        window.addEventListener('beforeunload', onUnload)

        return () => {
            window.removeEventListener('beforeunload', onUnload)
        }
    }, [cb])
};