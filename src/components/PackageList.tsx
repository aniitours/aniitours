import { Trees as Tree, Waves, SwissFranc as Swim, Heart } from 'lucide-react';
import { Destinations } from './Destinations';
import ContactForm from './ContactForm';
import shell from '../static/contact/shell.png';
import travel from '../static/contact/travel.png';
import { HeroContent } from './HeroContent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const packages = [
    {
      id: 'honeymoon-special',
      category: "popular",
      duration: '5N6D',
      durationAlias: '5 Nights / 6 Days',
      title: 'Honeymoon Special',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800',
      price: '80,800',
      locations: ['Portblair', 'Havelock', 'Neil'],
      activities: ['nature', 'beach', 'water', 'romantic']
    },
    {
      id: 'islands-exotic',
      category: "premium",
      duration: '3N4D',
      durationAlias: '3 Nights / 4 Days',
      title: 'Islands Exotic',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800',
      price: '56,400',
      locations: ['Portblair', 'Havelock', 'Neil'],
      activities: ['nature', 'beach', 'water']
    },
    {
      id: 'honeymoon-special',
      category: "deluxe",
      duration: '4N5D',
      durationAlias: '4 Nights / 5 Days',
      title: 'Islands Exotic',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800',
      price: '56,400',
      locations: ['Portblair', 'Havelock', 'Neil'],
      activities: ['nature', 'beach', 'water']
    },
    {
      id: 'islands-exotic',
      category: "standard",
      duration: '6N7D',
      durationAlias: '6 Nights / 7 Days',
      title: 'Islands Exotic',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800',
      price: '56,400',
      locations: ['Portblair', 'Havelock', 'Neil'],
      activities: ['nature', 'beach', 'water']
    },
    {
      id: 'honeymoon-special',
      category: "economy",
      duration: '7N8D',
      durationAlias: '7 Nights / 8 Days',
      title: 'Islands Exotic',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800',
      price: '56,400',
      locations: ['Portblair', 'Havelock', 'Neil'],
      activities: ['nature', 'beach', 'water']
    },
];

const PackageList = () => {
  const navigate = useNavigate();
  
  // Explicitly type state variables as arrays of strings
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  // Filter packages based on selected categories and durations
  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(pkg.category);
    const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(pkg.durationAlias);
    return matchesCategory && matchesDuration;
  });

  // Handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    setSelectedCategories(prev => 
      e.target.checked 
        ? [...prev, category] 
        : prev.filter(cat => cat !== category)
    );
  };

  // Handle duration filter change
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const duration = e.target.value;
    setSelectedDurations(prev => 
      e.target.checked 
        ? [...prev, duration] 
        : prev.filter(dur => dur !== duration)
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <HeroContent />
      <div className="flex gap-8">
        <div className="w-1/4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-4">Filter</h3>
            <div className="space-y-3">
              {['popular', 'premium', 'deluxe', 'standard', 'economy', 'budget'].map(category => (
                <label key={category} className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                    className="text-blue-500" 
                  />
                  <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                </label>
              ))}
            </div>
            <hr className='my-4'></hr>
            <h3 className="font-semibold mb-4">Duration</h3>
            <div className="space-y-3">
              {['3 Nights / 4 Days', '4 Nights / 5 Days', '5 Nights / 6 Days', '6 Nights / 7 Days', '7 Nights / 8 Days'].map(duration => (
                <label key={duration} className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    value={duration}
                    checked={selectedDurations.includes(duration)}
                    onChange={handleDurationChange}
                    className="text-blue-500" 
                  />
                  <span>{duration}</span>
                </label>
              ))}
            </div>
          </div>
          <img src={travel} alt="" />
        </div>
        
        <div className="w-3/4">
          <h2 className="text-xl font-semibold mb-6">Packages</h2>
          <div className="space-y-6">
            {filteredPackages.length > 0 ? (
              filteredPackages.map(pkg => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden rounded-3xl">
                  <div className="flex">
                    <img src={pkg.image} alt={pkg.title} className="w-64 h-48 object-cover rounded-2xl m-4" />
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
                      <div className="flex gap-4 mt-4">
                        {pkg.activities.includes('nature') && <Tree className="w-5 h-5 text-green-600" />}
                        {pkg.activities.includes('beach') && <Waves className="w-5 h-5 text-blue-400" />}
                        {pkg.activities.includes('water') && <Swim className="w-5 h-5 text-blue-600" />}
                        {pkg.activities.includes('romantic') && <Heart className="w-5 h-5 text-red-500" />}
                      </div>
                      <button 
                        className="mt-4 text-blue-600 font-medium hover:text-blue-700" 
                        onClick={() => navigate(`/package/${pkg.id}`)}
                      >
                        View Detail →
                      </button>
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
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center ml-8">
            <div className='ml-16'>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">We Make<br />World Travel Easy</h2>
              <p className="text-gray-600 mb-6 mr-48">
                Traveling under your own power and at your own pace, you'll connect more meaningfully with your destination and have more fun!
              </p>
              <img 
                src={shell}
                alt="Decorative shell"
                className="w-64 opacity-50 mt-24"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageList;
