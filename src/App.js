import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import RecipeDetailsPage from "./Components/RecipeDetailsPage/RecipeDetailsPage";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";
import Favorites from "./Components/Favorites/Favorites";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route index element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="/recipedetails/:id" element={<RecipeDetailsPage />} />
            <Route path="/favorite" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
