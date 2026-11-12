import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../components/Card";
import { styles } from "../styles/styles";
import { useFetch } from "../hooks/useFetch";

export function Category() {
  const { categoryName } = useParams();
  const { recipesData, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (error) {
    return <p>There was an error: {error}</p>;
  }

  if (loading) {
    return <p>Loading......</p>;
  }

  const recipes = recipesData?.meals ?? []; 

  if (recipes.length === 0) {
    return <p>No recipes found for the category "{categoryName}".</p>;
  }


  return (
    <>
      <div className={styles.contentContainer}>
        <h2 className={styles.h2}>{categoryName}</h2>
        <ul className={styles.cardContainer}>
          {recipes.map((recipe) => (
            <Card
              key={recipe.idMeal}
              to={`/recipe-details/${recipe.idMeal}`}
              name={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
