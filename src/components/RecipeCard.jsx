import { styles } from "../styles/styles";

export function RecipeCard({
  name,
  image,
  ingredients,
  instructions,
  handleFavorite,
  isFavorited,
}) {
  return (
    <article className={styles.recipeCard}>
      {/* Image with the button layered on top */}
      <h2 className={styles.h2}>{name}</h2>
      <div className="relative flex justify-center mt-10">
        <img src={image} alt={name} className="w-100 text-center rounded-md" />
        <button
          type="button"
          className={styles.favoritesButton}
          onClick={handleFavorite}
        >
          {isFavorited ? "Remove From Favorites" : "Add To Favorites"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-20">
        <section className={styles.cardBorder}>
          <h3 className={styles.cardsH3}>Ingredients</h3>
          <ul className="p-8 flex flex-col gap-6">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="bg-[#f3e8fa] rounded-md px-3 py-2">
                <span className="font-semibold">{ingredient.measure}</span>{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.cardBorder}>
          <h3 className={styles.cardsH3}>Instructions</h3>
          <p className="">{instructions}</p>
        </section>
      </div>
    </article>
  );
}
