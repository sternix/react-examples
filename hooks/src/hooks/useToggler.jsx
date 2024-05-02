import { useState, useCallback } from "react"

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-toggler.md

export default function useToggler(initialState) {
    const [value, setValue] = useState(initialState)

    const toggleValue = useCallback(() => setValue(prev => !prev), [])

    return [value, toggleValue]
}