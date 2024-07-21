import './sass/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import FeaturedWorks from './components/FeaturedWorks';

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <ParallaxWrapper /> */}
      <Timeline />
      <FeaturedWorks />
      <Footer />
    </>
  );
}

export default App;
