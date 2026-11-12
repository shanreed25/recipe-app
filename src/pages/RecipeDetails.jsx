import { useParams } from "react-router";
import { styles } from "../styles/styles";
import { RecipeCard } from "../components/RecipeCard";
import { useFavorites } from "../context/FavoritesContext";
import { useFetch } from "../hooks/useFetch";


function getIngredients(recipe) {
    const ingredients = [];

    //all recipes have 20 ingredients
    //strat at 1 and stop at 20
    for (let i = 1; i <= 20; i++) {
      /* get the ingredient and the measurement that goes with it
         they both share the same number like strIngredient5 goes with
         strMeasure5
         each time th loop runs it runs with a different number
         strIngredient${1} and strMeasure${1} then continue to 
         strIngredient${20} and strMeasure${20} getting
      */
      const ingredientName = recipe[`strIngredient${i}`];
      const ingredientMeasure = recipe[`strMeasure${i}`];

      const ingredientInfo = {
        name: ingredientName,
        measure: ingredientMeasure,
      };
      //NEXT:>>>some ingrdients are empty string so check for those and do not add them to the list
      ingredients.push(ingredientInfo);
      // console.log(ingredients);
    }
    return ingredients;
  }


export function RecipeDetails() {
  const { recipeId } = useParams();
  const { addFavorite, isFavorited, removeFavorite } = useFavorites();
  const { recipesData, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  if (error) {
    return <p>There was an error: {error}</p>;
  }

  if (loading) {
    return <p>Loading......</p>;
  }

  const recipe = recipesData?.meals?.[0]; 


  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const favorite = isFavorited(recipe.idMeal);

  function handleFavorite() {
    if (favorite) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite(recipe.idMeal);
    }
  }

  return (
    <>
      <div className={styles.contentContainer}>
        <RecipeCard
          isFavorited={favorite}
          name={recipe.strMeal}
          image={recipe.strMealThumb}
          ingredients={getIngredients(recipe)}
          instructions={recipe.strInstructions}
          handleFavorite={handleFavorite}
        />
      </div>
    </>
  );
}
