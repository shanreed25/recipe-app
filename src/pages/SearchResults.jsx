import { useSearchParams } from "react-router"

export function SearchResults(){
    const [searchParams] = useSearchParams()


    return(
        <>
        <h2>Search Results</h2>
        </>
    )
}