import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { SpecialPackages } from './components/SpecialPackages';
import { Activities } from './components/Activities';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PackageList from './components/PackageList';
import { HeroContent } from './components/HeroContent';
import AboutUs from './components/AboutUs';
import { WhyAmram } from './components/WhyAmram';
import { KeepPlanning } from './components/KeepPlanning';
import PackageDetails from './components/PackageDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <main>
                <HeroContent />
                <Hero />
                <Services />
                <Packages />
                <SpecialPackages />
                <Activities />
                <WhyAmram />
                <Testimonial />
                <KeepPlanning />
              </main>
            </>
          } />
          <Route path="/tour-packages" element={<PackageList />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path="/package/:id" element={<PackageDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;