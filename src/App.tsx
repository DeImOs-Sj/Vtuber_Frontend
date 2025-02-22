import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Buy from "./pages/Buy";
import Stream from "./pages/Stream";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StreamingPage from "./pages/StreamingPage";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
