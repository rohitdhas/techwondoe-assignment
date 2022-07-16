import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import WhyChooseUs from './components/whyChooseUs';
import Team from './components/team';
import News from './components/news';
import BottomSection from './components/bottomSection';
import GetInTouch from './components/getInTouch';
import Footer from './components/footer';

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
      <Footer />
    </div>
  );
}

export default App;
