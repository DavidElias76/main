
// This is used by the ReactCustomHooks

import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

    }, [url]) // changes dependant on the url 

    return [data]; // return an array which is stored in the data variable
}

export default useFetch;