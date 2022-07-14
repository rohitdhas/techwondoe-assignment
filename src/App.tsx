import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import WhyChooseUs from "./components/whyChooseUs";
import Team from "./components/team";
import News from "./components/news";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Team />
      <News />
    </div>
  );
}

export default App;
