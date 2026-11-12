# React Recipe App

> A a client-side recipe application that will allow users to browse recipes by category, search for specific recipes, view detailed recipe information, and manage a personal list of favorite recipes

## Getting started

```bash
git clone https://github.com/shanreed25/recipe-app.git
cd recipe-app
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).


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
- [X] This page must include a button to “Add to Favorites” or “Remove from Favorites”. The button’s state and action should be handled by your FavoritesContext.
### Favorites Page (/favorites):
- [X] Displays a list of all recipes that the user has marked as a favorite.
- [X] If the user has no favorites, this page should display a message prompting them to browse and add some.
### Search Functionality:
- [X] A search bar, likely in a shared Navbar, that allows users to search for recipes by name.
- [X] Submitting a search should navigate the user to a search results page (e.g., /search?query=Arrabiata). This page will display the results of the search query.

## Global State with Context API
- [X] Create a FavoritesContext to manage the user’s list of favorite recipes globally.
- [X] The context must provide:
    - [X] A list of favorite recipe IDs.
    - [X] A function to add a recipe to favorites.
    - [X] A function to remove a recipe from favorites.
    - [X] A function to check if a recipe is already in favorites.
- [X] This context should use your useLocalStorage hook internally to persist the favorites list across browser sessions.

## Components & UI
- [X] Create reusable, well-styled components (e.g., RecipeCard, Navbar, Spinner, ErrorMessage).
- [X] The application should be visually appealing and responsive. Use of a CSS framework, CSS-in-JS, or CSS Modules is up to you.


## Reflection

### Design decision: the useFetch hook

> The Home, Category, Recipe Details, Search Results and Favorites pages all had its own `useState` and `useEffect` code for fetching data, tracking loading tracking and error handling. They all were about 30 lines of almost the same code. I moved all that logic into a custom hook `useFetch` which help me find some errors I also repeated in the files. The fetch code now lives in one place and now any fixes I needed to do I can do in one place instead of 4 different places. Doing this help me see some other pieces of code that could be implemented better. The favorites page still has its own fetch logic because the hook would need to be called inside a loop and that does not work. 

### Most challenging part

The most challenging part of this project was remembering all of the tools React and React Router give you, and knowing which one to use in each situation. Like `useState` vs `useEffect` or `useParams` vs `useSearchParams`. The hard part was not knowing what each one does but picking the right one, and remembering when I did not need anything at all was the hard part. The favorites part was also a little difficult just because it connected so many pieces. If I had more time I would create reusable `Spinner` and `ErrorMessage` components. Right now each page shows the same code repeated in five pages.