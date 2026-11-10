import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"


export function Category() {
  const {categoryName} = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); 
    async function getCategory(){
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      const categoryData = await res.json();//returns a object meals that is an array of 81 items: {meals: Array(81)}
      const categoryMealsList = categoryData.meals
      console.log(categoryMealsList);
      setMeals(categoryMealsList)
    }

    getCategory();
    
    return () => controller.abort()

    }, [])


  return (
    <>
      <h2>{categoryName}</h2>
      <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} >
              <Link>{meal.strMeal}</Link>
            </li>
          ))}
        </ul>
    </>
  )
}

