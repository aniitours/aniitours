import { ArrowOutward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const natureImage = './static/keep-planning/nature.png'

export function KeepPlanning() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className='bg-[#FFF4E4] w-full flex flex-col md:flex-row overflow-hidden' >
            <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left p-8 md:w-full'>
                <h1 className='text-xl font-semibold font-poppins mb-4'>Keep on Planning</h1>
                <p>What to do, where to eat & more trip inspo.</p>
                <Link to="/tour-packages" className='bg-[#1E1D4C] p-4 text-white w-full md:w-auto md:px-8 mt-6 rounded-xl flex items-center justify-center'>
                    <p>Explore Packages</p>
                    <ArrowOutward className="my-2 p-1 text-white ml-4"/>
                </Link>
            </div>
            <div className="hidden md:block md:w-[40%]">
                <img src={natureImage} alt="Scenic nature view" className="w-full h-full object-cover" />
            </div>
        </div>
    </section>
  );
}