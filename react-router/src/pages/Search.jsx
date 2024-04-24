import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') || '')

    // search?search=deneme
    return (
        <div>Search
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <br />
            {search}
        </div>
    )
}

export default Search