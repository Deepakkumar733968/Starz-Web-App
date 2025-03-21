import { TopTenMovies } from "../../components/TopTenMovies";
import { MOVIES_TODAY_DATA } from "../../contents/moviesToday";
import {
  ORIGINALS,
  POPULAR,
  POWER_UNIVERSE,
  WEEKEND,
} from "../../contents/tvShows";
import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { Hits } from "../Series/Hits/Hits";
import { TVShows } from "../Series/TVShows/TVShows";
import { MoviePlayCard } from "./MoviePlayCard/MoviePlayCard";
import "./style.css";
const Movies = () => {
  return (
    <section>
      <NavBar />
      <Hits />
      <section className="movies-card-hr">
        <h1 className="movies-card-header">Movies</h1>
        <TVShows movieData={ORIGINALS} title={"Leaving Soon"} />
        <TVShows movieData={WEEKEND} title={"Drama"} />
        <TopTenMovies
          moviesData={MOVIES_TODAY_DATA}
          className={""}
          title={"STARZ Top 10 Movies"}
        />
        <TVShows movieData={POPULAR} title={"Action"} />
        <TVShows movieData={POWER_UNIVERSE} title={"Comedy"} />
        <TVShows movieData={WEEKEND} title={"Just Added"} />
        <MoviePlayCard />
        <TVShows movieData={ORIGINALS} title={"New Releases"} />
        <TVShows movieData={WEEKEND} title={"Award Winning & Nominated"} />
        <TVShows movieData={ORIGINALS} title={"Top Directors"} />
        <TVShows movieData={POPULAR} title={"Hidden Gems"} />
        <TVShows movieData={POWER_UNIVERSE} title={"Crime Dramas"} />
        <TVShows movieData={WEEKEND} title={"Horror"} />
        <TVShows movieData={ORIGINALS} title={"Popular"} />
        <TVShows movieData={WEEKEND} title={"Screen Legends"} />
        <TVShows movieData={ORIGINALS} title={"Black Cinema"} />
        <TVShows movieData={POPULAR} title={"Women Behind the Camera"} />
        <TVShows movieData={POWER_UNIVERSE} title={"Cult Movies"} />
        <TVShows movieData={WEEKEND} title={"Romance"} />
        <TVShows movieData={ORIGINALS} title={"Hollywood Hits"} />
        <TVShows movieData={WEEKEND} title={"Sci-Fi"} />
        <TVShows movieData={ORIGINALS} title={"Keep It Under 100 (Minutes)"} />
        <TVShows movieData={POPULAR} title={"Kids & Family"} />
        <TVShows movieData={POWER_UNIVERSE} title={"Documentary"} />
        <TVShows movieData={WEEKEND} title={"Westerns"} />
      </section>
      <Footer />
    </section>
  );
};

export default Movies;
