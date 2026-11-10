export function RecipeCard({name, image, ingredients}){
    return(
        <article className="text-[#431853] bg-white max-w-3xl mx-auto border border-[#431853] rounded-lg">
            <h2>{name}</h2>
            <img src={image} />
            <div>
                <h3>Ingredients</h3>
                <ul>{ingredients.map((ingredient) => (
                    <li key={ingredient.name}>
                        {ingredient.measure} {ingredient.name}
                    </li>
                ))}</ul>
            </div>

        </article>
    )
}