import { Filter, X } from 'lucide-react';
import trees from '../static/icons/trees-icon.svg';
import binocular from '../static/icons/binocular-icon.svg';
import swim from '../static/icons/swim-icon.svg';
import sleep from '../static/icons/sleep-icon.svg';
import { Destinations } from './Destinations';
import ContactForm from './ContactForm';
import shell from '../static/contact/shell.png';

import { HeroContent } from './HeroContent';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { packages } from '../data/packages';

const durations = [
  { code: '3N4D', alias: '3 Nights / 4 Days' },
  { code: '4N5D', alias: '4 Nights / 5 Days' },
  { code: '5N6D', alias: '5 Nights / 6 Days' },
  { code: '6N7D', alias: '6 Nights / 7 Days' },
  { code: '7N8D', alias: '7 Nights / 8 Days' },
];

const PackageList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activityIcons: { [key: string]: string } = {
    nature: trees,
    beach: binocular,
    water: swim,
    romantic: sleep,
  };
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPackagesSectionVisible, setIsPackagesSectionVisible] = useState(false);
  const packagesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainContainer = document.getElementById('main-container');
    if (!mainContainer) return;

    if (isFilterOpen) {
      const originalStyle = mainContainer.style.overflow;
      mainContainer.style.overflow = 'hidden';
      return () => {
        mainContainer.style.overflow = originalStyle;
      };
    }
  }, [isFilterOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPackagesSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    const currentRef = packagesSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const elem = document.getElementById('contact-form');
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100); // Delay to ensure the page has rendered
      }
    }
  }, [location]);

  useEffect(() => {
    const newFilteredData = packages.filter(pkg => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(pkg.category);
      const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(pkg.duration);
      return matchesCategory && matchesDuration;
    });

    setFilteredPackages(newFilteredData);
  }, [selectedCategories, selectedDurations]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    setSelectedCategories(prev =>
      e.target.checked
        ? [...prev, category]
        : prev.filter(cat => cat !== category)
    );
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const duration = e.target.value;
    setSelectedDurations(prev =>
      e.target.checked
        ? [...prev, duration]
        : prev.filter(d => d !== duration)
    );
  };

  const filterContent = (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {['popular', 'premium', 'deluxe', 'standard', 'economy', 'budget'].map(category => (
            <label key={category} className="flex items-center gap-2">
              <input 
                type="checkbox" 
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h3 className="font-semibold mb-4">Duration</h3>
        <div className="space-y-3">
          {durations.map(dur => (
            <label key={dur.code} className="flex items-center gap-2">
              <input 
                type="checkbox" 
                value={dur.code} 
                onChange={handleDurationChange} 
                checked={selectedDurations.includes(dur.code)} 
                className="text-blue-500 focus:ring-blue-500" 
              />
              <span>{dur.alias}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <HeroContent />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-full md:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg sticky top-24">
              {filterContent}
            </div>
          </div>
          
          {/* Packages List */}
          <div id="packages-section" ref={packagesSectionRef} className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold mb-6">Packages</h2>
            <div className="space-y-6">
              {filteredPackages.length > 0 ? (
                filteredPackages.map(pkg => (
                  <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden rounded-3xl">
                    <div className="flex flex-col sm:flex-row">
                      <img src={pkg.image} alt={pkg.title} className="w-full sm:w-64 h-48 object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none m-0 sm:m-4" />
                      <div className="p-6 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-sm text-gray-500">{pkg.duration}</span>
                            <h3 className="text-xl font-semibold">{pkg.title}</h3>
                            <p className="text-sm text-gray-600">
                              {pkg.locations.join(' → ')}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Starting from</p>
                            <p className="text-xl font-bold text-blue-600">₹{pkg.price}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex gap-4">
                            {pkg.activities.map(activity => (
                              activityIcons[activity] && <img key={activity} src={activityIcons[activity]} alt={`${activity} icon`} className="w-5 h-5" />
                            ))}
                          </div>
                          <button 
                            className="p-0 md:px-4 md:py-2 md:border md:border-blue-600 text-blue-600 md:rounded-lg font-medium md:hover:bg-blue-600 md:hover:text-white transition-colors" 
                            onClick={() => navigate(`/package/${pkg.id}`)}
                          >
                            View Detail →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No packages match your filter criteria.</p>
              )}
            </div>
          </div>
        </div>
        
        <Destinations />
        <div className="bg-[url(/src/static/contact/contact-bg.png)] py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className='text-center'>
                <h2 className="text-3xl font-bold text-navy-900 mb-4">We Make<br />World Travel Easy</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Traveling under your own power and at your own pace, you'll connect more meaningfully with your destination and have more fun!
                </p>
                <img 
                  src={shell}
                  alt="Decorative shell"
                  className="w-64 opacity-50 mt-12 mx-auto"
                />
              </div>
              <div id="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      {isPackagesSectionVisible && (
        <button
          onClick={() => setIsFilterOpen(true)}
          className="md:hidden fixed bottom-10 right-6 bg-[#181433] bg-opacity-90 text-white p-4 rounded-full shadow-lg z-40 hover:bg-opacity-100 transition-all animate-glow-pulse"
          aria-label="Open filters"
        >
          <Filter className="w-6 h-6" />
        </button>
      )}

      {/* Mobile Filter Popup */}
      {isFilterOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col justify-end">
          <div className="bg-white w-full rounded-t-2xl p-6 shadow-xl animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl">Filter Packages</h3>
              <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            {filterContent}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-[#181433] text-white py-3 rounded-lg mt-6 mb-4 font-semibold hover:bg-opacity-90 transition-all"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageList;
