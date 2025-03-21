import { ORIGINALS } from "../../contents/tvShows";
import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { TVShows } from "../Series/TVShows/TVShows";
import { Cast } from "./Cast/Cast";
import { DetailImgHeader } from "./DetailImgHeader/DetailImgHeader";
import { GetEven } from "./GetEven/GetEven";

const MovieDetail = () => {
  return (
    <main>
      <NavBar isList={false} />
      <DetailImgHeader />
      <Cast />
      <TVShows movieData={ORIGINALS} title={"Originals & Exclusives"} />
      <GetEven />
      <Footer />
    </main>
  );
};

export default MovieDetail;
