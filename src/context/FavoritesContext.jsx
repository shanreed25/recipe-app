import { Children, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoritesContext = createContext(undefined);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  function addFavorite(recipeId) {
    setFavorites((prev) => (prev.includes(recipeId) ? prev : [...prev, recipeId]));
  }

  function isFavorited(id){
    return favorites.includes(id)
  }

  function removeFavorite(recipeId) {
    setFavorites((prev) => prev.filter((favoriteId) => favoriteId !== recipeId));
  }

  const value = { favorites, addFavorite, isFavorited, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}


export function useFavorites() {
  const context = useContext(FavoritesContext);

//   console.log(context);

  if (context === undefined) {
    throw new Error("useFavorites must be used inside a FavoritesProvider");
  }
  return context;
}