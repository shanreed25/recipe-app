# React Recipe App




## State Management & Data Fetching
- [X] Use the useState and useEffect hooks to fetch and display data from the API.
- [X] Your application should manage loading and error states gracefully, displaying appropriate UI indicators to the user (e.g., a loading spinner, an error message).


## Routing
Your application must include the following pages and routing logic:

### Home Page (/):
- [X] Displays a grid or list of all available recipe categories fetched from the API.
- [X] Each category should be a link that navigates to its respective category page.
### Category Page (/category/[categoryName]):
- [X] A dynamic route that displays all recipes belonging to the category specified in the URL (e.g., /category/Seafood).
- [X] Each recipe shown should be a link to its detailed recipe page.
### Recipe Detail Page (/recipe/[recipeId]):
- [X] A dynamic route that fetches and displays the full details for a single recipe (image, ingredients, instructions, etc.).
- [ ] This page must include a button to “Add to Favorites” or “Remove from Favorites”. The button’s state and action should be handled by your FavoritesContext.
### Favorites Page (/favorites):
- [ ] Displays a list of all recipes that the user has marked as a favorite.
- [ ] If the user has no favorites, this page should display a message prompting them to browse and add some.
### Search Functionality:
- [X] A search bar, likely in a shared Navbar, that allows users to search for recipes by name.
- [X] Submitting a search should navigate the user to a search results page (e.g., /search?query=Arrabiata). This page will display the results of the search query.

## Global State with Context API
- [ ] Create a FavoritesContext to manage the user’s list of favorite recipes globally.
- [ ] The context must provide:
    - [ ] A list of favorite recipe IDs.
    - [ ] A function to add a recipe to favorites.
    - [ ] A function to remove a recipe from favorites.
    - [ ] A function to check if a recipe is already in favorites.
- [ ] This context should use your useLocalStorage hook internally to persist the favorites list across browser sessions.

## Components & UI
- [X] Create reusable, well-styled components (e.g., RecipeCard, Navbar, Spinner, ErrorMessage).
- [ ] The application should be visually appealing and responsive. Use of a CSS framework, CSS-in-JS, or CSS Modules is up to you.
