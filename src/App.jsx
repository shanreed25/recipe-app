import { Routes, Route} from 'react-router';
import { RecipeApp } from './components/RecipeApp';
import {Home} from './pages/Home'
import {RecipeDetails} from './pages/RecipeDetails'
import {Favorites} from './pages/Favorites'
import {Category} from './pages/Category'




function App() {


  return (
    <Routes>
      <Route element={<RecipeApp/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path='/recipe-details/:recipeId' element={<RecipeDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        
      </Route>
    </Routes>
  )
}

export default App
