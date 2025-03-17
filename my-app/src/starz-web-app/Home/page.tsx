import { BoldOriginals } from "./BoldOriginals/BoldOriginals";
import { Footer } from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { SignUpBanner } from "./SignUpBanner/SignUpBanner";
import "./style.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <SignUpBanner />
      <BoldOriginals />
      <Footer />
    </>
  );
};

export default Home;
