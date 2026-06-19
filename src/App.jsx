import Navbar from './components/Navbar';
import MarqueeStrip from './components/MarqueeStrip';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';
import Cv from './components/Cv';

function App() {
  const isCvPage = window.location.pathname === '/cv' || window.location.pathname === '/cv/';

  if (isCvPage) {
    return <Cv />;
  }

  return (
    <>
      {/* Fixed navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Marquee skills strip (between Hero and About) */}
        <MarqueeStrip />

        {/* 3. About + Stats */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Portfolio / Projects */}
        <Portfolio />

        {/* 6. Testimonials */}
        <Testimonials />
      </main>

      {/* 7. Footer CTA */}
      <Footer />
    </>
  );
}

export default App;
