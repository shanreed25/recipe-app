import { useSearchParams } from "react-router";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  //   console.log(searchParams.get("query"));

  const url = searchTerm
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    : null;

  const { recipesData, loading, error } = useFetch(url);

  if (error) {
    return <p>There was an error: {error}</p>;
  }

  if (loading) {
    return <p>Loading......</p>;
  }

  const recipes = recipesData?.meals ?? [];

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
              to={`/recipe/${recipe.idMeal}`}
              name={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))}
        </ul>
      )}
    </>
  );
}
