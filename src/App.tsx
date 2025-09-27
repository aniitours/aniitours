import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Packages } from './components/Packages';
import { SpecialPackages } from './components/SpecialPackages';
import { Activities } from './components/Activities';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import FloatingButtons from './components/FloatingButtons';
import 'antd/dist/reset.css';
import PackageList from './components/PackageList';
import { HeroContent } from './components/HeroContent';
import AboutUs from './components/AboutUs';
import { WhyAmram } from './components/WhyAmram';
import { KeepPlanning } from './components/KeepPlanning';
import PackageDetails from './components/PackageDetails';
import { AndamanTours } from './components/AndamanTours';
import Terms from './components/Terms';
import Privacy from './components/Privacy';


function App() {
  return (
    <Router>
        <ScrollToTop />
      <div id="main-container" className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <main className="pt-16">
                <HeroContent />
                <Hero />
                <Services />
                <Destinations />
                <Packages />
                <SpecialPackages />
                <Activities />
                <WhyAmram />
                {/* <Testimonial /> */}
                <KeepPlanning />
              </main>
            </>
          } />
          <Route path="/tour-packages" element={<PackageList />} />
          <Route path="/andaman-tours" element={<AndamanTours />} />
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;