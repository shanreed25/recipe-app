import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites.js";

export function Favorites() {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (favorites.length === 0) {
      setMeals([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setError(null);

    async function fetchFavorites() {
      try {
        const requests = favorites.map(async (id) => {
          const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`;
          const response = await fetch(url, { signal: controller.signal });
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          const data = await response.json();
          return data.meals ? data.meals[0] : null;
        });

        const results = await Promise.all(requests);
        setMeals(results.filter((meal) => meal !== null));
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

    fetchFavorites();

    return () => controller.abort();
  }, [favorites]);

  if (favorites.length === 0) {
    return (
      <section className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">No favorites yet</h1>
        <p className="mb-6 text-gray-600">
          Browse recipes and tap "Add to Favorites" to save the ones you love here.
        </p>
        <Link
          to="/"
          className="inline-block rounded-md bg-orange-500 px-5 py-2 font-medium text-white transition-colors hover:bg-orange-600"
        >
          Browse Categories
        </Link>
      </section>
    );
  }

  if (loading) return <p className="py-8 text-center text-gray-600">Loading favorites...</p>;
  if (error) return <p className="py-8 text-center text-red-600">Something went wrong: {error}</p>;

  const visibleMeals = meals.filter((meal) => isFavorite(meal.idMeal));

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        My Favorites ({favorites.length})
      </h1>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
        {visibleMeals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <Link to={`/recipe-details/${meal.idMeal}`} className="block transition hover:opacity-90">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="aspect-square w-full object-cover" />
              <h2 className="p-3 text-center font-semibold text-gray-800">{meal.strMeal}</h2>
            </Link>
            <button
              type="button"
              onClick={() => removeFavorite(meal.idMeal)}
              className="mx-3 mb-3 mt-auto rounded-md border border-red-400 px-3 py-1 text-sm text-red-600 transition-colors hover:bg-red-50"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}