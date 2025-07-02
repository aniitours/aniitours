import ActivitiesCarousel from './ActivitiesCarousel';

const coupleStroll = './static/about-us/couple2.png';

const sightseeingData = {
  'Srivijayapuram (Port Blair Region)': [
  {
    title: 'Carbyn\'s Cove Beach',
    images: [
      { src: './static/package-details/6N7D/south-andaman/corbyns-cove-beach.png', name: 'Carbyn\'s Cove Beach' },
      { src: './static/package-details/6N7D/explore-andaman/paragliding.png', name: 'Paragliding' },
    ],
    description: "Just 7 km from the city center, Carbyn's Cove Beach is the closest beach to the capital. Lined with palm trees and lapped by blue waters, it's a favorite among tourists.",
    details: "Activities: Jet skiing, speed boat rides, parasailing, and boat scuba rides.\nExtras: Japanese bunkers and Science Centre on the way.",
  },
  {
    title: 'National Memorial Cellular Jail',
    images: [
      { src: './static/package-details/6N7D/south-andaman/cellular-jail.png', name: 'Cellular Jail' },
    ],
    description: "A must-visit for every Indian, this 1906 colonial structure symbolizes the sacrifices made during India's freedom struggle.",
    details: "Attractions: Solitary cells, museum galleries, and light & sound show.",
  },
  {
    title: 'Light & Sound Show at Ross Island',
    images: [],
    description: "Depicts the story of India’s independence and the island’s colonial history.",
    details: "Timing: 5:15 PM (Closed on Wednesdays & public holidays).\nHow to Reach: 15-minute boat ride from the Water Sports Complex.",
  },
  {
    title: 'Ross Island (Netaji Subhash Chandra Bose Dweep)',
    images: [
      { src: './static/package-details/6N7D/south-andaman/north-bay-island.png', name: 'North Bay Island' },
      { src: './static/package-details/6N7D/south-andaman/ross-island.png', name: 'Ross Island' },
    ],
    description: "Once the British administrative headquarters, now in ruins.",
    details: "Attractions: Old bungalows, churches, and bakeries enveloped in nature.",
  },
  {
    title: 'North Bay Coral Island',
    images: [
      { src: './static/package-details/3N4D/classic-honeymoon/coral-bridge.png', name: 'Coral Bridge' },
    ],
    description: "Ideal for water activities and swimming.",
    details: "Highlights: Lighthouse featured on the ₹20 Indian currency note.\nNearby: Mount Harriet (Mount Manipur), renamed in 2021 to honor Anglo-Manipur war heroes.",
  },
  {
    title: 'Baratang Island',
    images: [
        { src: './static/about-us/mud-volcano.png', name: 'Mud Volcano' },
        { src: './static/package-details/3N4D/adventure-andaman/baratang-island.png', name: 'Baratang Island' },
        { src: './static/package-details/3N4D/adventure-andaman/limestone-caves.png', name: 'Limestone Caves' },
    ],
    description: "A full-day adventure trip that begins with a convoy ride through tribal areas.",
    details: "Must-See:\n1. Limestone Caves\n2. Mud Volcano\nNote: Not suitable for small children or the elderly.",
  },
  {
    title: 'Museums in Srivijayapuram',
    images: [
      { src: './static/package-details/6N7D/south-andaman/cellular-jail.png', name: 'Cellular Jail' },
      { src: './static/package-details/3N4D/classic-short-trip/museum.png', name: 'Museum' },
    ],
    description: "",
    details: "1. Chatham Saw Mill: Oldest in Asia, operational since 1803.\n2. Samudrika Naval Museum: Marine life, fossils, shells.\n3. Anthropological Museum: Tribes and their culture.\n4. Fisheries Museum: Aquarium and aquatic exhibits.\n5. Cellular Jail Museum: Timed entries and sound shows in Hindi/English.\n6. Science Centre: Great for children, en route to Carbyn's Cove.",
  },
],
'Swaraj Dweep (Havelock Island)': [
    {
        title: '',
        images: [
            { src: './static/package-details/3N4D/adventure-andaman/swarajdweep.png', name: 'Swaraj Dweep' },
            { src: './static/package-details/3N4D/adventure-andaman/radhanagar-beach.png', name: 'Radhanagar Beach' },
            { src: './static/package-details/3N4D/adventure-andaman/kaalapathar-beach.png', name: 'Kaalapathar Beach' },
        ],
        description: "",
        details: "1. Radhanagar Beach\nRated one of Asia's top beaches. Blue Flag certified. Best For: Swimming, sunbathing, and photography.\n\n2. Kalapathar Beach\nLined with black rocks. Note: Not suitable for swimming, ideal for sunsets.\n\n3. Elephant Island\nNamed after the elephants that once worked here. Access: Boat or trek (boat preferred). Activities: Snorkeling, scuba, and other water sports.",
    }
],
'Shaheed Dweep (Neil Island)': [
    {
        title: '',
        images: [
            { src: './static/package-details/5N6D/honeymoon-trip/bharatpur-beach.png', name: 'Bharatpur Beach' },
            { src: './static/package-details/6N7D/couple-special/sitapur-beach.png', name: 'Sitapur Beach' },
            { src: './static/package-details/3N4D/classic-honeymoon/coral-bridge.png', name: 'Coral Bridge' },
        ],
        description: "",
        details: "1. Coral Bridge (Natural Rock Formation)\nA natural arch carved by the sea. Visit During: Low tide, walk over slippery coral beds.\n\n2. Bharatpur Beach\nClose to the jetty. Ideal for swimming, water sports, and sunrises.\n\n3. Sitapur Beach\nPopular for sunrise. Strong tidal waves—avoid swimming.\n\n4. Laxmanpur Beach\nFamous for sunsets. Note: Not safe for swimming due to sudden depth.",
    }
],
};

export function AndamanTours() {
  return (
    <div className="bg-white font-poppins">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          <img 
            src={coupleStroll}
            alt="Andaman Tours"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg" />
        </div>
      </div>
      <div className="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-caudex font-bold text-gray-800">Sightseeing and Activities in the Andaman & Nicobar Islands</h1>
          <p className="mt-4 text-lg text-gray-600">
            The Andaman and Nicobar Islands offer a blend of scenic beauty, historical significance, and adventure. Whether you're a beach lover, a history enthusiast, or an adventure seeker, these islands have something to excite every traveler. Here's a detailed breakdown of what to see and do in different parts of the islands.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(sightseeingData).map(([region, destinations]) => (
            <div key={region}>
              <h2 className="text-3xl font-caudex font-bold text-gray-800 mb-8">{region}</h2>
              <div className="space-y-12">
                {destinations.map((item, index) => (
                  <div key={index}>
                    {item.title && <h3 className="text-2xl font-caudex font-semibold text-gray-800 mb-4">{item.title}</h3>}
                    {item.images.length > 0 && (
                      <div className="flex flex-wrap gap-4 mb-4">
                        {item.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
                            <img src={image.src} alt={image.name} className={`w-full h-full object-cover ${image.name === 'Paragliding' ? 'object-bottom' : ''}`} />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                              <h3 className="w-full p-4 text-white text-center">{image.name}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-gray-700 whitespace-pre-line">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h2 className="text-3xl font-caudex font-bold text-gray-800 mb-8">Top Activities in Andaman & Nicobar</h2>
            <ActivitiesCarousel />
            <div className="text-gray-700 whitespace-pre-line mt-8">
              <p><strong>Water Adventures</strong></p>
              <p>1. Glass Bottom Boat Ride: ₹1000 - ₹2500</p>
              <p>2. Semi Submarine Coral Safari: North Bay / Elephant Beach</p>
              <p>3. Dolphin Boat Ride: North Bay / Elephant Beach</p>
              <br />
              <p><strong>Snorkeling</strong></p>
              <p>1. North Bay: ₹1000</p>
              <p>2. Elephant Beach (Havelock): ₹1200</p>
              <p>3. Bharatpur Beach: ₹1100</p>
              <br />
              <p><strong>Trekking</strong></p>
              <p>1. Mundapahad: ₹1500</p>
              <p>2. Elephant Beach: ₹1300</p>
              <br />
              <p><strong>Kayaking</strong></p>
              <p>1. Havelock: ₹3500</p>
              <br />
              <p><strong>Water Adventures</strong></p>
              <p>1. North Bay: ₹3500</p>
              <p>2. Elephant Beach: ₹3500</p>
              <p>3. Neil Island (Boat Dive): ₹5500</p>
              <br />
              <p><strong>Sea Walk</strong></p>
              <p>1. North Bay: ₹3500</p>
              <p>2. Elephant Beach: ₹3800</p>
              <br />
              <p><strong>Parasailing</strong></p>
              <p>1. North Bay / Carbyn's Cove: ₹3000</p>
              <p>2. Elephant Beach: ₹3200</p>
              <br />
              <p><strong>Water Adventures</strong></p>
              <p>1. ₹25,000 and above</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-caudex font-bold text-gray-800 mb-8">Honeymoon Tour Extras</h2>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md mb-4">
              <img src="./static/package-details/5N6D/honeymoon-special/candle-night-dinner.png" alt="Candle night dinner" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="w-full p-4 text-white text-center">Candle night dinner</h3>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cakes: On request</li>
              <li>Flower Bed Decoration: Customizable</li>
              <li>Candlelight Dinners: At resorts or on the beach</li>
              <li>Beach Candlelight Setup: Romantic experiences curated on request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
