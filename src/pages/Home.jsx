import { useEffect, useState } from "react";


export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories(){
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const categoriesData = await res.json();//returns a object categories that is an array of 14 items: {categories: Array(14)}
      console.log(categoriesData);
    }

    getCategories();
  }, [])


  return (
    <>
      <h1>Home Page</h1>
      <div>
        <h2>Recipe Categories</h2>
        <ul>

        </ul>
      </div>
    </>
  )
}

