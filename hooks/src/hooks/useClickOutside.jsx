import { useEffect } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-click-outside.md

export default function useClickOutside(ref, callback) {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
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