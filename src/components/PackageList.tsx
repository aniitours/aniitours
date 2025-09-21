import { Filter, X } from 'lucide-react';
const trees = './static/icons/trees-icon.svg';
const binocular = './static/icons/binocular-icon.svg';
const filterPlane = './static/tour-packages/filter-plane.png';
const swim = './static/icons/swim-icon.svg';
const sleep = './static/icons/sleep-icon.svg';
import { Destinations } from './Destinations';
import ContactForm from './ContactForm';
const shell = './static/contact/shell.png';

import { HeroContent } from './HeroContent';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { packages } from '../data/packages';
import { categories, durationDetails } from '../data/packageStructure';

const getCategoryColor = (category: string) => {
  if (['economy', 'budget', 'standard'].includes(category)) {
    return '#37863A';
  }
  if (['deluxe', 'premium'].includes(category)) {
    return '#EFAC00';
  }
  return '#000'; // A default fallback color
};

const durations = Object.entries(durationDetails).map(([code, { alias }]) => ({ code, alias }));

const activityIcons: { [key: string]: string } = {
  nature: trees,
  beach: binocular,
  water: swim,
  romantic: sleep,
};

const PackageList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string>('budget');
  const [selectedDuration, setSelectedDuration] = useState<string>('3N4D');
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [isFilterOpen, setIsFilterOpen] = useState(false);



  // Handle scroll to contact form when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollToContact) {
      const timer = setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent scrolling again on re-renders
          window.history.replaceState({}, document.title);
        }
      }, 100); // Small delay to ensure the page has rendered
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const duration = params.get('duration');
    const category = params.get('category');
    const hasFilterParams = duration && category;

    if (hasFilterParams) {
      setSelectedDuration(duration);
      setSelectedCategory(category);
    }

    const isMobile = window.innerWidth < 768;
    if (isMobile && location.hash !== '#contact-form' && !hasFilterParams) {
      setIsFilterOpen(true);
    }
  }, [location.search, location.hash]);



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
      const matchesCategory = selectedCategory ? pkg.category === selectedCategory : true;
      const matchesDuration = selectedDuration ? pkg.duration === selectedDuration : true;
      return matchesCategory && matchesDuration;
    });

    setFilteredPackages(newFilteredData);
  }, [selectedCategory, selectedDuration]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDuration(e.target.value);
  };

  const filterContent = (
    <div className="space-y-6 bg-white">
      {/* <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Category</span>
        </h3>
        <div className="space-y-3">
          {categories.map(category => (
            <label key={category.code} className="flex items-center gap-2">
              <input 
                type="radio" 
                name="category"
                value={category.code}
                checked={selectedCategory === category.code}
                onChange={handleCategoryChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className='capitalize'>{category.name}</span>
            </label>
          ))}
        </div>
      </div>
      <hr /> */}
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Duration</span>
        </h3>
        <div className="space-y-3">
          {durations.map(duration => (
            <label key={duration.code} className="flex items-center gap-2">
              <input 
                type="radio" 
                name="duration"
                value={duration.code}
                checked={selectedDuration === duration.code}
                onChange={handleDurationChange}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span>{duration.alias}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <HeroContent />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-72 self-start">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {filterContent}
            </div>
            <img src={filterPlane} alt="filter-plane" className="w-full sm:w-64 h-auto sm:h-40 object-cover rounded-lg m-0 sm:m-4" />
          </div>
          
          {/* Packages List */}
          <div id="packages-section" className="w-full flex-1">
            <h2 className="text-xl font-semibold mb-6">Packages</h2>
            <div className="space-y-6">
              {filteredPackages.length > 0 ? (
                filteredPackages.map(pkg => (
                  <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out md:hover:shadow-2xl md:hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row">
                      <img src={pkg.images} alt={pkg.title} className="w-full sm:w-64 h-auto sm:h-40 object-cover rounded-lg m-0 sm:m-4" />
                      <div className="p-4 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <span className="text-sm text-gray-500">{pkg.durationAlias}</span>
                            <h3 className="text-xl font-semibold">{pkg.title}</h3>
                            <p className="text-sm text-gray-600">
                              {pkg.locations.join(' - ')}
                            </p>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                            <p className="text-base" style={{ color: getCategoryColor(pkg.category) }}>
                              pricing starts @
                            </p>
                            <p className="text-xl font-semibold text-black">₹{pkg.price}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex gap-4 mb-2">
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
        <div className="bg-[url(./static/contact/contact-bg.png)] py-20">
          <div className="container max-w-7xl mx-auto px-4">
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
      <button
        onClick={() => setIsFilterOpen(true)}
        className="md:hidden fixed bottom-10 right-6 text-white p-5 rounded-full z-40 transition-transform duration-300 hover:scale-110 siri-gradient"
        aria-label="Open filters"
      >
        <Filter className="w-7 h-7" />
      </button>

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
