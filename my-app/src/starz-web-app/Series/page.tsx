import "./style.css";
import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { Hits } from "./Hits/Hits";
import { TVShows } from "./TVShows/TVShows";
const Series = () => {
  return (
    <>
      <NavBar />
      <Hits />
      <section className="tv-shows-main">
        <h1 className="tv-shows-header">TV Shows</h1>
        <TVShows />
      </section>
      <Footer />
    </>
  );
};

export default Series;
