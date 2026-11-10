# React Recipe App



## Routing
Your application must include the following pages and routing logic:

### Home Page (/):
- [X] Displays a grid or list of all available recipe categories fetched from the API.
- [X] Each category should be a link that navigates to its respective category page.
### Category Page (/category/[categoryName]):
- [X] A dynamic route that displays all recipes belonging to the category specified in the URL (e.g., /category/Seafood).
- [X] Each recipe shown should be a link to its detailed recipe page.
### Recipe Detail Page (/recipe/[recipeId]):
- [ ] A dynamic route that fetches and displays the full details for a single recipe (image, ingredients, instructions, etc.).
- [ ] This page must include a button to “Add to Favorites” or “Remove from Favorites”. The button’s state and action should be handled by your FavoritesContext.
### Favorites Page (/favorites):
- [ ] Displays a list of all recipes that the user has marked as a favorite.
- [ ] If the user has no favorites, this page should display a message prompting them to browse and add some.
### Search Functionality:
- [ ] A search bar, likely in a shared Navbar, that allows users to search for recipes by name.
- [ ] Submitting a search should navigate the user to a search results page (e.g., /search?query=Arrabiata). This page will display the results of the search query.

