import { Footer } from "../Home/Footer/Footer";
import { NavBar } from "../Home/NavBar/NavBar";
import { Cast } from "./Cast/Cast";
import { DetailImgHeader } from "./DetailImgHeader/DetailImgHeader";
import { GetEven } from "./GetEven/GetEven";

const MovieDetail = () => {
  return (
    <main>
      <NavBar isList={false} />
      <DetailImgHeader />
      <Cast />
      <h1>Others Also Watched</h1>
      <GetEven />
      <Footer />
    </main>
  );
};

export default MovieDetail;
