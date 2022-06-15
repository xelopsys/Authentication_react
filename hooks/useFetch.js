import { useEffect } from 'react'

export const useFetch = (url, options, callback) => {
    useEffect(() => {
        async function fetchData() {
            await fetch(url, options)
                .then(response => response.json())
                .then(data => callback(data))
        }
        fetchData()
    }, [url, options, callback])
}

