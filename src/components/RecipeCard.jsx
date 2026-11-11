export function RecipeCard({name, image, ingredients, instructions}){
    return(
        <article className="flex flex-col  text-[#431853] bg-white max-w-6xl mx-auto border border-[#431853] rounded-lg ">
            <h2>{name}</h2>
            <img src={image} width={400} height={400}/>
            <div className="flex ">
                <div>
                    <h3>Ingredients</h3>
                    <div className="">
                        {ingredients.map((ingredient, index) => (
                        <p key={index}>
                            {ingredient.measure} {ingredient.name}
                        </p>
                    ))}
                    </div>
                </div>
                <p>{instructions}</p>
            </div>

        </article>
    )
}