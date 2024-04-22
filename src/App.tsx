import './sass/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import ParallaxWrapper from './components/ParallaxWrapper';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ParallaxWrapper />
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
