import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { Hits } from "../Series/Hits/Hits";
import { MoviePlayCard } from "./MoviePlayCard/MoviePlayCard";
import "./style.css";
const Movies = () => {
  return (
    <section>
      <NavBar />
      <Hits />
      <MoviePlayCard />
      <Footer />
    </section>
  );
};

export default Movies;
