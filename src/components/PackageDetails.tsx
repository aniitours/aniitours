import { useParams, useNavigate } from 'react-router-dom';
import { packageStructure, durationDetails, categories } from '../data/packageStructure';
import { ArrowLeft, MapPin } from 'lucide-react';

import { useEffect, useState } from 'react';

interface Day {
  day: number;
  title: string;
  activities: string[];
  images: { url: string; name: string }[];
}

interface ItineraryData {
  title: string;
  subtitle: string;
  description?: string;
  days: Day[];
}

const INCLUSIVE_CONTENT = [
  'The package offers a per-couple rate that includes comfortable accommodation with complimentary breakfast. An AC vehicle is provided for sightseeing as per the itinerary, along with cruise tickets and museum entry fees, ensuring a seamless and enjoyable experience.',
];

const EXCLUSIVE_CONTENT = [
  'The vehicle is available only as specified in the itinerary and not for additional use. Any expenses arising from unforeseen circumstances, personal costs such as room service, special orders, or alcoholic and non-alcoholic beverages, are not included in the package.',
];

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [packageData, setPackageData] = useState<ItineraryData | null>(null);
  const [packageInfo, setPackageInfo] = useState<{ title: string; images: string; } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPackageDetails = async () => {
      if (!id) {
        setError('No package ID provided.');
        setLoading(false);
        return;
      }

      // 1. Find duration and package info from packageStructure
      const duration = Object.keys(durationDetails).find(d => id.includes(d));
      if (!duration) {
        setError('Invalid package ID: Duration not found.');
        setLoading(false);
        return;
      }

      const packagesInDuration = packageStructure[duration as keyof typeof packageStructure];
      const foundPackageInfo = packagesInDuration.find(pkg => {
        const baseId = `${pkg.title.toLowerCase().replace(/\s+/g, '-')}-${duration}`;
        return id.startsWith(baseId);
      });

      if (!foundPackageInfo) {
        setError('Package not found.');
        setLoading(false);
        return;
      }
      setPackageInfo(foundPackageInfo);

      // 2. Construct filename for itinerary data (strip category)
      let fileName = id;
      for (const category of categories) {
        if (fileName.endsWith(`-${category.code}`)) {
          fileName = fileName.slice(0, -(`-${category.code}`.length));
          break;
        }
      }

      // 3. Dynamically import itinerary data using Vite's eager glob import
      try {
        const modules: Record<string, { itineraryData: ItineraryData }> = import.meta.glob('./package-details/*/*.ts', { eager: true });
        const modulePath = `./package-details/${duration}/${fileName}.ts`;

        if (modules[modulePath]) {
          const module = modules[modulePath];
          setPackageData(module.itineraryData);
        } else {
          setError(`Itinerary file not found for this package.`);
        }
      } catch (err) {
        console.error("Failed to load package data:", err);
        setError('An error occurred while loading package details.');
      } finally {
        setLoading(false);
      }
    };

    loadPackageDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!packageData || !packageInfo) {
    return <div>Package not found</div>;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h1 className="font-caudex text-3xl font-bold mb-2 flex items-center gap-4 mt-16">
          <ArrowLeft className="cursor-pointer" onClick={() => navigate('/tour-packages')} />
          {packageData.title}
        </h1>
        <h2 className="text-xl text-gray-600 mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          {packageData.subtitle}
        </h2>
        
        <h3 className="font-poppins font-bold text-2xl leading-none mb-6">Itinerary</h3>
        
        <div className="space-y-8 ml-4">
          {packageData.days.map((day: Day, index: number) => (
            <div key={index} className="relative pl-8 custom-dashed-border mb-8">
              <div className="absolute -left-4 bg-white">
                <div className="w-6 h-6 rounded bg-[#D5EBFF] flex items-center justify-center text-[#1E1D4C] text-sm font-bold p-4">
                  {String(day.day).padStart(2, '0')}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Day {day.day}: {day.title}</h4>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {day.activities.map((activity: string, actIndex: number) => (
                  <li key={actIndex}>{activity}</li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {day.images.map((image, idx) => (
                  <div key={idx} className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
                    <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="w-full p-4 text-white text-center">{image.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Inclusive and Exclusive Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inclusive Box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-center font-bold text-gray-800 mb-4">INCLUSIVE</h3>
            <div className="text-center text-gray-600 space-y-2 font-poppins text-[15px]">
              {INCLUSIVE_CONTENT.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>

          {/* Exclusive Box */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="text-center font-bold text-gray-800 mb-4">EXCLUSIVE</h3>
            <div className="text-center text-gray-600 space-y-2 font-poppins text-[15px]">
              {EXCLUSIVE_CONTENT.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PackageDetails;