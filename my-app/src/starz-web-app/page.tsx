import "./style.css";
import Home from "./Home/page";
import Series from "./Series/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";
import Movies from "./Movies/pages";
import MovieDetail from "./MoviesDetail/page";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

const StarzWebApp = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="starz-web-app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default StarzWebApp;
