import { useState } from "react";

// https://www.30secondsofcode.org/react/s/use-merge-state/

export default function useMergeState(initialState = {}) {
    const [value, setValue] = useState(initialState)

    const mergeState = newState => {
        // eğer fonksiyon gönderilirse
        // fonksiyonun değerini al
        if (typeof newState === 'function')
            newState = newState(value)
        setValue({ ...value, ...newState })
    }

    return [value, mergeState]
}
