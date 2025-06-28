import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AccessTime, CrisisAlert, Hiking } from '@mui/icons-material';

const itineraryData = {
  'honeymoon-special': {
    title: 'Discover Andaman',
    subtitle: '3N Neil 1N Havelock 1N portblair',
    description: "Begin your journey in Port Blair with a visit to Corbyns Cove Beach and the historic Cellular Jail, including an enlightening Light and Sound Show. Enjoy the pristine sands of Radhanagar Beach on Havelock Island (Swaraj) on the second day. The third day is filled with water activities at North Bay Island and a tour of the colonial ruins on Ross Island. Conclude your trip with a relaxing morning before departing from Port Blair.",
    days: [
      {
        day: 1,
        title: 'Arrival',
        activities: [
          { time: 'Morning/Afternoon', description: 'Arrive in Port Blair' },
          { time: 'Evening', description: 'Visit Cellular Jail for The Light and Sound Show' },
          { time: 'Activity', description: "Explore The Historic Cellular Jail And Attend The Light And Sound Show To Learn About The History Of India's Freedom Struggle" }
        ]
      },
      {
        day: 2,
        title: 'North Bay And Ross Island',
        activities: [
          { time: 'Morning', description: 'Head To North Bay Island' },
          { time: 'Activity', description: 'Enjoy Water Activities Like Snorkeling, Glass-Bottom Boat Rides, And Underwater Sea Walking' },
          { time: 'Afternoon', description: 'Visit Ross Island' },
          { time: 'Activity', description: "Explore The Ruins Of British Administrative Buildings, A Church, And A Museum Showcasing The Island's History" }
        ]
      },
      {
        day: 3,
        title: 'Baratang Island',
        activities: [
          { time: 'Early Morning', description: 'Depart For Baratang Island' },
          { time: 'Activity', description: 'Journey Through The Jarawa Reserve Forest And Visit The Limestone Caves And Mud Volcano' },
          { time: 'Note', description: 'The Trip Involves A Long Drive And A Boat Ride Through Mangrove Creeks' }
        ]
      },
      {
        day: 4,
        title: 'Havelock Island - Elephant Beach And Kalapathar Beach',
        activities: [
          { time: 'Morning', description: 'Ferry To Havelock Island' },
          { time: 'Activity', description: 'Visit Elephant Beach For Snorkeling And Other Water Activities' },
          { time: 'Afternoon', description: 'Relax At Kalapathar Beach' },
          { time: 'Activity', description: 'Enjoy The Serene Beach Perfect For Relaxing And Photography' }
        ]
      },
      {
        day: 5,
        title: 'Scuba Diving And Radhanagar Beach',
        activities: [
          { time: 'Morning', description: 'Scuba Diving' },
          { time: 'Activity', description: 'Experience Scuba Diving To Explore The Vibrant Underwater Life' },
          { time: 'Afternoon', description: 'Visit Radhanagar Beach' },
          { time: 'Activity', description: 'Relax At One Of The Best Beaches In Asia, Known For Its Stunning Sunsets' }
        ]
      },
      {
        day: 6,
        title: 'Return To Port Blair And Museum Tours',
        activities: [
          { time: 'Morning', description: 'Return To Port Blair Via Ferry' },
          { time: 'Afternoon', description: 'Visit Museums' },
          { time: 'Activity', description: "Tour The Anthropological Museum, Samudrika Naval Marine Museum, And The Fisheries Museum To Learn About The Region's Culture, Marine Life, And History" }
        ]
      },
      {
        day: 7,
        title: 'Departure',
        activities: [
          { time: 'Morning', description: 'Drop-Off At The Airport For Your Return Flight' }
        ]
      }
    ]
  }
};

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const packageData = itineraryData[id as keyof typeof itineraryData];

  if (!packageData) {
    return <div>Package not found</div>;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-4 mt-16">
          <ArrowLeft className="cursor-pointer" onClick={() => navigate('/tour-packages')} />
          {packageData.title}
        </h1>
        <h2 className="text-xl text-gray-600 mb-6">{packageData.subtitle}</h2>
        
        <h3 className="text-2xl font-bold mb-6">Packages Detail</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700">{packageData.description}</p>
        </div>
        
        <div className="space-y-8 ml-4">
          {packageData.days.map((day, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-200 border-dashed mb-8">
              <div className="absolute -left-4 bg-white">
                <div className="w-6 h-6 rounded bg-[#D5EBFF] flex items-center justify-center text-[#1E1D4C] text-sm font-bold p-4">
                  {String(day.day).padStart(2, '0')}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Day {day.day}: {day.title}</h4>
              </div>

              <div className="space-y-3">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-start gap-2">
                    {
                      activity.time === 'Activity' ? <Hiking className={`w-4 h-4 text-green-500 ml-6`} /> :
                      activity.time === 'Note' ? <CrisisAlert className={`w-4 h-4 text-red-500 ml-6`} /> :
                      <AccessTime className={`w-4 h-4 text-[#1E1D4C]`} />
                    }
                    <div>
                      <span className="font-medium">{activity.time}: </span>
                      <span className="text-gray-600">{activity.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;