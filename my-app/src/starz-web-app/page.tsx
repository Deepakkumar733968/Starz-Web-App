import "./style.css";
import Home from "./Home/page";
import Series from "./Series/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const StarzWebApp = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default StarzWebApp;
