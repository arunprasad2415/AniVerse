import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import AnimeDetails
from "./pages/AnimeDetails";

import AIRecommendations
from "./pages/AIRecommendations";

import Trending
from "./pages/Trending";

import Explore
from "./pages/Explore";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/anime/:id"
          element={<AnimeDetails />}
        />

        <Route
          path="/ai"
          element={
            <AIRecommendations />
          }
        />

        <Route
          path="/trending"
          element={<Trending />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;