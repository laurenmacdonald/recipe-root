import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RecipeBook from './pages/RecipeBook';
import RecipeDetailPage from './components/RecipeDetails';
import SuggestedRecipe from './pages/SuggestedRecipe';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<RecipeBook />} path="/recipe-book" />
            <Route element={<RecipeDetailPage />} path="/recipe/:id" />
            <Route
              element={<RecipeBook />}
              exact
              path="/recipe-book/:favorite/:want"
            />
            <Route element={<RecipeBook />} exact path="/recipe-book/:want" />
            <Route
              element={<SuggestedRecipe />}
              exact
              path="/suggested-recipe"
            />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Home />} path="/:message?" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
