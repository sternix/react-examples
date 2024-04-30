import { useState } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-local-storage.md

// bu hook'ta sadece value değişebilir
// keyName bir defa veriliyor

export default function useLocalStorage(keyName, defaultValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(keyName)
            if (value)
                return JSON.parse(value)
            else {
                localStorage.setItem(keyName, JSON.stringify(defaultValue))
                return defaultValue
            }
        } catch {
            return defaultValue
        }
    })

    const setValue = newValue => {
        try {
            localStorage.setItem(keyName, JSON.stringify(newValue))
        } catch { }

        setStoredValue(newValue)
    }

    return [storedValue, setValue]
}