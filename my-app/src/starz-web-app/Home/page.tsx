import { BoldOriginals } from "./BoldOriginals/BoldOriginals";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { Footer } from "./Footer/Footer";
import { MoviesToday } from "./MoviesToday/MoviesToday";
import NavBar from "./NavBar/NavBar";
import { SignUpBanner } from "./SignUpBanner/SignUpBanner";
import "./style.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <MoviesToday />
      <ComingSoon />
      <SignUpBanner />
      <BoldOriginals />
      <Footer />
    </>
  );
};

export default Home;
