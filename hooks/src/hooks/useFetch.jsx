import { useEffect, useState } from "react";

// https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/react/s/use-fetch.md
// kodda değişiklik yaptım abort hata veriyordu
// ve status kontrolü ekledim
// json olarak sonuç dönüyor


export default function useFetch(url, options = {}) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, { ...options })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const ok = (res.status >= 200 && res.status < 300)
                if (!ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setResponse(json)
            } catch (err) {
                setError(err)
            }
        }

        fetchData()
        // eslint-disable-next-line 
    }, [])

    return { response, error }
}