import { useState, useEffect } from "react"

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-debounce.md

// bir input'a veri girilirken
// her onChange olayında set edilmesi sıkıntı olabilir
// örneğin yanlış yazılmasında backspace vs 'de kullanılabilir
// kullanıcı girişi yaptıktan bir müddet sonra ( delay kadar )
// value set edilebilir

export default function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}