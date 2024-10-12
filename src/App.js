import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetals from "./components/MovieDetals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetImg from "./components/SetImg";
function App() {
  return (
    <div className="color-body">
      <SetImg />
     {/* <NavBar/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetals />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
