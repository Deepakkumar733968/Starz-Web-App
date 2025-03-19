import { BoldOriginals } from "./BoldOriginals/BoldOriginals";
import { Boundary } from "./Boundary/Boundary";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { Footer } from "./Footer/Footer";
import { HeaderImage } from "./HeaderImage/HeaderImage";
import { MoviesToday } from "./MoviesToday/MoviesToday";
import NavBar from "./NavBar/NavBar";
import { SignUpBanner } from "./SignUpBanner/SignUpBanner";
import "./style.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <HeaderImage />
      <Boundary />
      <MoviesToday />
      <ComingSoon />
      <SignUpBanner />
      <BoldOriginals />
      <Footer />
    </>
  );
};

export default Home;
