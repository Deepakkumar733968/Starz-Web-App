import { Cast } from "./Cast/Cast";
import { DetailImgHeader } from "./DetailImgHeader/DetailImgHeader";
import { GetEven } from "./GetEven/GetEven";

const MovieDetail = () => {
  return (
    <main>
      <DetailImgHeader />
      <Cast />
      <h1>Others Also Watched</h1>
      <GetEven />
    </main>
  );
};

export default MovieDetail;
