import { ArrowOutward } from '@mui/icons-material';
import nature from '../static/keep-planning/nature.png'


export function KeepPlanning() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className='bg-[#FFF4E4] w-full flex rounded-2xl overflow-hidden'>
            <div className='flex basis-[70%] flex flex-col justify-center m-8'>
                <h1 className='text-xl font-semibold font-poppins mb-4'>Keep on Planning</h1>
                <p>What to do, where to eat & more trip inspo.</p>
                <button className='bg-[#1E1D4C] p-4 text-white w-2/5 mt-6 rounded-xl flex items-center justify-center'>
                    <p>Explore Packages</p>
                    <ArrowOutward className="my-2 p-1 text-white ml-4"/>
                </button>
            </div>
            <img src={nature} alt="" />
        </div>
    </section>
  );
}