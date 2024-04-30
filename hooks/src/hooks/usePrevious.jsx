import { useEffect, useRef } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-previous.md

export default function usePrevious(value) {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}