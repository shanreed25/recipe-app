import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Card } from "../components/Card";
import { styles } from "../styles/styles";


export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); //built-in browser tool for canceling a fetch request that is still in progress
    async function getCategories(){
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const categoriesData = await res.json();//returns a object categories that is an array of 14 items: {categories: Array(14)}
      // console.log(categoriesData);
      const categoriesList = categoriesData.categories
      // console.log(categoriesList);
      setCategories(categoriesList)
    }

    getCategories();
    
    return () => controller.abort()//clean up
  }, [])


  return (
    <>
      <div className={styles.contentContainer}>
        <h2 className={styles.h2}>Categories</h2>
        <ul className={styles.cardContainer}>
          {categories.map((category) => (
            <Card
            key={category.idCategory}
            to={`/category/${category.strCategory}`}
            name={category.strCategory}
            image={category.strCategoryThumb}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

