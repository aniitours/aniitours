import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 font-caudex">Contact Us</h2>
          <p className="text-gray-600 mt-2 font-poppins">Get in touch with us for any inquiries.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 bg-gray-50 p-8 rounded-xl shadow-lg">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 font-caudex text-gray-800">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-poppins mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A75F1]" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-poppins mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A75F1]" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-poppins mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A75F1]" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-poppins mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A75F1]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#3A75F1] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-poppins">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 md:pl-12">
            <div className="flex items-start">
              <div className="bg-[#3A75F1] p-4 rounded-full mr-6 flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold font-caudex text-gray-800">Address</h4>
                <p className="text-gray-600 font-poppins">123 Travel Lane, Port Blair, Andaman & Nicobar Islands, India</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#3A75F1] p-4 rounded-full mr-6 flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold font-caudex text-gray-800">Phone</h4>
                <p className="text-gray-600 font-poppins">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#3A75F1] p-4 rounded-full mr-6 flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold font-caudex text-gray-800">Email</h4>
                <p className="text-gray-600 font-poppins">contact@aniitours.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
