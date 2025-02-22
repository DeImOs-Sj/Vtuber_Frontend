import Main from "../components/Main";
import Middle from "../components/Middle";
import Showcase from "../components/Showcase";
import MainHero from "../components/MainHero";
const HomePage = () => {
  return (
    <div className="bg-[#FCFCE6]">
      <MainHero />
      <Main />
      <Middle />
      <Showcase />
    </div>
  );
};

export default HomePage;
