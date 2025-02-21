import Header from "./components/Header";
import Main from "./components/Main";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import MainHero from "./components/MainHero";
import WorkShowcase from "./components/Workspace";
function App() {
  return (
    <div className="bg-[#FCFCE6]">
      <Header />
      <MainHero />
      <Main />
      <Middle />
      <Showcase />
      <WorkShowcase />
      <Footer />
    </div>
  );
}

export default App;
