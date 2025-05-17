import testimonialBg from '../static/testimonial/testimonial-bg.png'
import passport from '../static/testimonial/passport.png'
import lady from '../static/testimonial/lady.jpg'


export function Testimonial() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className='relative'>
        <img src={testimonialBg} alt="" className=''/>
        <img src={passport} alt="" className='absolute bottom-0 left-0'/>
        <div className='absolute w-full h-full inset-0 flex items-center justify-center top-10'>
          <div className='flex items-center justify-center w-1/2 h-1/2 bg-white rounded-2xl relative'>
            <div className="absolute -top-12 w-24 h-24 rounded-full border-4 shadow-lg border-white overflow-hidden flex">
              <img src={lady} alt="" className='w-full h-full object-cover'/>
            </div>
          </div>
          <div className='absolute flex items-center justify-center text-center text-[#5E6282] font-poppins w-2/5 h-1/3'>
            Enjoyed the monsoon holidays especially Radhanagar Beach and scubadiving.
          </div>
          <div className='absolute bottom-24 flex items-center justify-center text-center text-[#5E6282] font-poppins w-2/5 h-1/3'>
            <h6>Suresh Ravi</h6>
          </div>
        </div>
      </div>
    </section>
  );
}