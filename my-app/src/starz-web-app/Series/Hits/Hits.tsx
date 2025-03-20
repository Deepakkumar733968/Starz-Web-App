import StarzButton from "../../../components/Button/StarzButton";
import "./style.css";
export const Hits = () => {
  return (
    <section className="hits-main">
      <div className="hits-text-align">
        <h3 className="hits-header">Explore Thousands Of Hits</h3>
        <span className="hits-des">
          Watch your favorite series and movies with our special offer for only
          $3/mo for 3 months.
        </span>
        <StarzButton value={"Claim Special Offer"} />
      </div>
    </section>
  );
};
