import { useSearchParams } from "react-router"

export function SearchResults(){
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("query"));

    return(
        <>
        <h2>Search Results</h2>
        </>
    )
}