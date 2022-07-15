import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import WhyChooseUs from "./components/whyChooseUs";
import Team from "./components/team";
import News from "./components/news";
import BottomSection from "./components/bottomSection";
import GetInTouch from "./components/getInTouch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Team />
      <News />
      <BottomSection />
      <GetInTouch />
    </div>
  );
}

export default App;
