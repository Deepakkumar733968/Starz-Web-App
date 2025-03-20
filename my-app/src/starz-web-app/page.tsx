import "./style.css";
import Home from "./Home/page";
import Series from "./Series/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";

const StarzWebApp = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default StarzWebApp;
