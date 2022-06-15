import { useEffect, useState } from 'react'

export const useFetchData = (uri) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(false)
            try {
                const response = await fetch(uri)
                const json = await response.json()
                setData(json)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }

        }
        fetchData()
    }, [uri])

    return { data, error, loading }

}

