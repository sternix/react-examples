import { useState, useCallback } from "react"

export default function useToggler(initialState) {
    const [value, setValue] = useState(initialState)

    const toggleValue = useCallback(() => setValue(prev => !prev), [])

    return [value, toggleValue]
}