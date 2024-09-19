import React from 'react';
import our from '../../assets/our.png';

const Our = () => {
  return (
    <section className='max-w-Container mx-auto pt-20'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/4 w-full justify-center lg:justify-start'>
          <h2 className='lg:text-54px text-[18px]'>Our Services</h2>
          <p className='mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        
        <div className='lg:w-3/5 w-full flex justify-center lg:justify-start'>
          <img src={our} alt="Our Services" className='mt-4 lg:mt-0' />
        </div>
      </div>
    </section>
  );
}

export default Our;
