import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Buy from "./pages/BuyPage";
import Stream from "./pages/StreamPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StreamingPage from "./pages/StreamingPage";
import PricingPage from "./pages/PricingPage";
import FeaturesPage from "./pages/FeaturesPage";
function App() {
  return (
    <div className="bg-[#FCFCE6]">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/streams" element={<Stream />} />
          <Route path="/streams/:streamId" element={<StreamingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
