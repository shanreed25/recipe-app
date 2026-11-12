import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Card } from "../components/Card";
import { styles } from "../styles/styles";

export function Favorites() {
  const { favorites } = useFavorites();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (favorites.length === 0) {
      setRecipes([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setError(null);

    async function getFavorites() {
      try {
        const requests = favorites.map(async (recipeId) => {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
            { signal: controller.signal },
          );

          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }

          const recipeData = await response.json();

          return recipeData.meals ? recipeData.meals[0] : null;
        });

        const results = await Promise.all(requests);

        setRecipes(results.filter((meal) => meal !== null));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getFavorites();

    return () => controller.abort();
  }, [favorites]);

  if (error) {
    return <p>There was an error: {error}</p>;
  }

  if (loading) {
    return <p>Loading......</p>;
  }

  if (recipes.length === 0) {
    return <p>No Favorites Added Yet....Browse and add some</p>;
  }

  return (
    <div className={styles.contentContainer}>
      <h2 className={styles.h2}>Favorites</h2>
      <ul className={styles.cardContainer}>
        {recipes.map((recipe) => (
          <Card
            key={recipe.idMeal}
            to={`/recipe/${recipe.idMeal}`}
            name={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
      </ul>
    </div>
  );
}
