import { useEffect, useRef, useState } from "react";

// https://www.30secondsofcode.org/react/s/use-persisted-state/

// bu hook'ta hem key hem value değişebilir

export default function usePersistedState(name, defaultValue) {
    const [value, setValue] = useState(defaultValue)
    const nameRef = useRef(name)

    useEffect(() => {
        try {
            const storedValue = localStorage.getItem(name)
            if (storedValue !== null)
                setValue(storedValue)
            else
                localStorage.setItem(name, defaultValue)
        } catch {
            setValue(defaultValue)
        }
    }, [name, defaultValue])

    // key sabit value değişti ise
    useEffect(() => {
        try {
            localStorage.setItem(nameRef.current, value)
        } catch { }
    }, [value])

    // key alanı değişirse 
    // yeni key'i value ile set et
    // eski key'i sil
    useEffect(() => {
        const lastName = nameRef.current
        if (name !== lastName) {
            try {
                localStorage.setItem(name, value)
                nameRef.current = name
                localStorage.removeItem(lastName)
            } catch { }
        }
    }, [name, value])

    return [value, setValue]
}