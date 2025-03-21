import "./style.css";
import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { Hits } from "./Hits/Hits";
import { TVShows } from "./TVShows/TVShows";
import {
  ORIGINALS,
  POPULAR,
  POWER_UNIVERSE,
  WEEKEND,
} from "../../contents/tvShows";
const Series = () => {
  return (
    <>
      <NavBar />
      <Hits />
      <section className="tv-shows-main">
        <h1 className="tv-shows-header">TV Shows</h1>
        <TVShows movieData={ORIGINALS} title={"Originals & Exclusives"} />
        <TVShows movieData={WEEKEND} title={"Binge In A Weekend"} />
        <TVShows movieData={ORIGINALS} title={"Popular"} />
        <TVShows movieData={POPULAR} title={"Power Universe"} />
        <TVShows movieData={POWER_UNIVERSE} title={"Captivating Dramas"} />
        <TVShows movieData={WEEKEND} title={"Documentary"} />
        <TVShows movieData={POPULAR} title={"Westerns"} />
      </section>
      <Footer />
    </>
  );
};

export default Series;
