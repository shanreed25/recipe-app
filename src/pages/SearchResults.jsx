import { useState } from "react";
import { useSearchParams } from "react-router"

export function SearchResults(){
    const [searchParams] = useSearchParams()
    const searchTerm = searchParams.get("query")
    const [recipes, setRecipes] = useState([])
    console.log(searchParams.get("query"));

    useEffect(() => {
        const controller = new AbortController();
        async function getRecipe() {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
            );

            const recipeData = await res.json();
        }

    })

    return(
        <>
        <h2>Search Results</h2>
        </>
    )
}