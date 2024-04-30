import { useCallback, useEffect, useState } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-search-param.md

// TODO: çalışmıyor

export default function useSearchParam(param) {
    const getValue = useCallback(
        () => new URLSearchParams(window.location.search).get(param),
        [param]
    )

    const [value, setValue] = useState(getValue)

    useEffect(() => {
        const onChange = () => {
            setValue(getValue())
        }

        window.addEventListener('popstate', onChange)
        window.addEventListener('pushstate', onChange)
        window.addEventListener('replacestate', onChange)

        return () => {
            window.removeEventListener('popstate', onChange)
            window.removeEventListener('pushstate', onChange)
            window.removeEventListener('replacestate', onChange)
        }
    }, [getValue])

    return value
}
