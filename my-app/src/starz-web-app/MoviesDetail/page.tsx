import {
  ORIGINALS,
  POPULAR,
  POWER_UNIVERSE,
  WEEKEND,
} from "../../contents/tvShows";
import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { TVShows } from "../Series/TVShows/TVShows";
import { Cast } from "./Cast/Cast";
import { DetailImgHeader } from "./DetailImgHeader/DetailImgHeader";
import { GetEven } from "./GetEven/GetEven";
import { useParams } from "react-router-dom";

const allMovies = [...ORIGINALS, ...POPULAR, ...POWER_UNIVERSE, ...WEEKEND];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = allMovies.find((m) => m.id.toString() === id);
  return (
    <main>
      <NavBar isList={false} />
      <DetailImgHeader movieTitle={movie?.movieTitle || "Jab"} />
      <Cast />
      <TVShows movieData={ORIGINALS} title={"Originals & Exclusives"} />
      <GetEven />
      <Footer />
    </main>
  );
};

export default MovieDetail;
