import { useEffect, useState } from "react"

export default function EmbedPage() {

    const queryParameters = new URLSearchParams(window.location.search)
    const page = queryParameters.get("page")

    const [renderer, setRenderer] = useState(null)

    useEffect(() => {
        if (page === 'Roadmap') setRenderer(<>Roadmap Page</>)
        else if (page === 'Map') setRenderer(<>Map Page</>)
        else window.location.href = '/Notfound'

    }, [])

    return (
        <>
            {renderer}
        </>
    )
}