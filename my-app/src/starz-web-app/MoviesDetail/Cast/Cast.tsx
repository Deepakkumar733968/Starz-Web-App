import StarzButton from "../../../components/Button/StarzButton";
import "./style.css";
export const Cast = () => {
  return (
    <section className="cast-main">
      <div className="cast-frd-div">
        <div className="cast-sec-div">
          <h6 className="cast-sup-hrd">cast</h6>
          <div className="align-car-list">
            <a href="">Martin Lawrence</a>
            <a href="">Luke Wilson</a>
            <a href="">Peter Greene</a>
            <a href="">David Chappelle</a>
            <a href="">Nicole Ari Parker</a>
            <a href="">Graham Beckel</a>
            <a href="">Robert Miranda</a>
            <a href="">Olek Krupa</a>
            <a href="">Saverio Guerra</a>
            <a href="">Richard C. Sarafian</a>
            <a href="">Tamala Jones</a>
            <a href="">Julio Oscar Mechoso</a>
          </div>
        </div>
        <div className="trd-sec-des">
          <div className="trd-sec-des-align-min">
            <h6>Directed By</h6>
            <a href="">Les Mayfield</a>
          </div>
          <div className="trd-sec-des-align-min">
            <h6>Produced By</h6>
            <a href="">Neal H. Moritz , Toby Jaffe</a>
          </div>
          <div className="trd-sec-des-align-min">
            <h6>Written By</h6>
            <a href="">Michael Berry , John Blumenthal ...</a>
          </div>
        </div>
        <button className="see-all-cast">See all cast & crew</button>
      </div>
    </section>
  );
};
