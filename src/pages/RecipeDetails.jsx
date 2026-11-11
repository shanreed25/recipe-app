import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { styles } from "../styles/styles";
import { Card } from "../components/Card";
import { RecipeCard } from "../components/RecipeCard";

export function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setError(null);

    async function getRecipe() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const recipeData = await res.json(); //returns a object meals that is an array of 1 meal item: {meals: Array(1)}
        const mealList = recipeData.meals; //returns an array of one object [{...}]
        const [recipeObj] = mealList; //destructure to get object
        console.log(recipeObj);
        setRecipe(recipeObj);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    }

    getRecipe();

    return () => controller.abort();
  }, []);

  function getIngredients() {
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

  const ingredients = getIngredients();

    if (error) {
      return (
      <p>There was an error: {error}</p>
      )
  }

  return (
    <>
      <div className={styles.contentContainer}>
        <RecipeCard
          name={recipe.strMeal}
          image={recipe.strMealThumb}
          ingredients={ingredients}
          instructions={recipe.strInstructions}
        />
      </div>
    </>
  );
}
