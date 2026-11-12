import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetchHook";
import { styles } from "../styles/styles";

export function Home() {
    const { recipesData, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const categories = recipesData?.categories ?? []


  if (error) {
    return (
    <p>There was an error: {error}</p>
    )
  }

   if (loading) {
    return (
    <p>Loading......</p>
    )
  }

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
  );
}
