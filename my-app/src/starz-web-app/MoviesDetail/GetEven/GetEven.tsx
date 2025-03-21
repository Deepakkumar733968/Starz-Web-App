import StarzButton from "../../../components/Button/StarzButton";
import "./style.css";
export const GetEven = () => {
  return (
    <section className="even-main">
      <div className="even-align-main">
        <p className="even-header">Get even more with STARZ</p>
        <p className="even-des">
          All of STARZ blockbuster movies, epic originals, and addictive series.
        </p>
        <StarzButton value={"Start watching now"} />
      </div>
    </section>
  );
};
