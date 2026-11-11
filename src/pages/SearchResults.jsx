import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Card } from "../components/Card";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  //   console.log(searchParams.get("query"));

  useEffect(() => {
    const controller = new AbortController();
    setError(null);

    async function getRecipe() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        );

        if (!res.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const recipeData = await res.json();
        setRecipes(recipeData.meals ?? []); //if is recipeData.meals null use []
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    }

    getRecipe();

    return () => controller.abort(); //clean up
  }, []);

  if (error) {
    return <p>There was an error: {error}</p>;
  }

  return (
    <>
      <h2>Search Results for {searchTerm}</h2>
      {recipes.length === 0 ? (
        <p>No results found for {searchTerm}</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <Card
              key={recipe.idMeal}
              to={`/recipe-details/${recipe.idMeal}`}
              name={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))}
        </ul>
      )}
    </>
  );
}
