import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import AlertSection from "./Components/AlertSection/AlertSection";
import FirstHighlight from "./Components/FirstHighlight/FirstHighlight";
import SecondHighlight from "./Components/SecondHighlight/SecondHighlight";
import ThirdHighlight from "./Components/ThirdHighlight/ThirdHighlight";
import FourthHighlight from "./Components/FourthHighlight/FourthHighlight";
import FifthHighlight from "./Components/FifthHighlight/FifthHighlight";
import SixthHighlight from "./Components/SixthHighlight/SixthHighlight";
import Footer from "./Components/Footer/Footer";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import Iphone from "./Components/Iphone/Iphone";
import SingleAppleProduct from "./Components/SingleAppleProduct/SingleAppleProduct";

function Home() {
  return (
    <>
      <AlertSection />
      <FirstHighlight />
      <SecondHighlight />
      <ThirdHighlight />
      <FourthHighlight />
      <FifthHighlight />
      <SixthHighlight />
      <YoutubeVideos />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* All iPhone products */}
        <Route path="/iphone" element={<Iphone />} />

        {/* Single iPhone product */}
        <Route path="/iphone/:id" element={<SingleAppleProduct />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
