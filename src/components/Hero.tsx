import "@fontsource/caudex";
import "@fontsource/poppins";
const heroImage1 = './static/hero/hero-image-1.png';
const heroImage2 = './static/hero/hero-image-2.png';
const heroImage3 = './static/hero/hero-image-3.png';


export function Hero() {
  return (
    <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[550px] gap-4">
                <div className="lg:basis-[60%] h-[400px] lg:h-full relative rounded-2xl overflow-hidden bg-blue-50">
          <img 
            src={heroImage1}
            alt="Beach view"
            className="w-full h-full object-cover"
          />
        </div>
                        <div className='lg:basis-[40%] flex flex-col gap-4'>
          <div className="basis-1/2 h-[200px] lg:h-auto flex bg-blue-50 rounded-2xl overflow-hidden">
            <img 
              src={heroImage2}
              alt="Beach view"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="basis-1/2 h-[200px] lg:h-auto flex bg-blue-50 rounded-2xl overflow-hidden">
            <img 
              src={heroImage3}
              alt="Beach view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}