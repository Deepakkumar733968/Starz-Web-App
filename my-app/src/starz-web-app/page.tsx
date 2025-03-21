import "./style.css";
import Home from "./Home/page";
import Series from "./Series/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";
import Movies from "./Movies/pages";
import MovieDetail from "./MoviesDetail/page";

const StarzWebApp = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies-detail" element={<MovieDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default StarzWebApp;
