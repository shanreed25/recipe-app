import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../components/Card";
import { styles } from "../styles/styles";

export function Category() {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function getCategory() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
      );
      const categoryData = await res.json(); //returns a object meals that is an array of 81 items: {meals: Array(81)}
      const categoryMealsList = categoryData.meals;
      console.log(categoryMealsList);
      setMeals(categoryMealsList);
    }

    getCategory();

    return () => controller.abort();
  }, []);

  return (
    <>
      <div className={styles.contentContainer}>
        <h2 className={styles.h2}>{categoryName}</h2>
        <ul className={styles.cardContainer}>
          {meals.map((meal) => (
            <Card
              key={meal.idMeal}
              to={`/recipe-details/${meal.idMeal}`}
              name={meal.strMeal}
              image={meal.strMealThumb}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
