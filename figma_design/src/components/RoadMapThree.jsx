import { useEffect } from 'react';
import '../styles/RoadMap.css';
import phase3 from "../../public/phase3.png";

import aos from 'aos';
import 'aos/dist/aos.css';
export const RoadmapThree=() =>{

  useEffect(()=>{
    aos.init({
      duration: 1200,
    })
  },[])
  return (
    <div  className=' min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center lg:space-x-10 gap-10 w-full mt-10'>
        <div className='text-Area flex flex-col items-center w-full lg:w-1/3 lg:ml-44' data-aos='fade-right'>
          <h1 className='roadmap01-h2 text-white text-3xl sm:text-4xl md:text-5xl head-gradient mb-8'>PHASE 3</h1>
          <ul className='text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0'>
            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
            <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
            <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
            <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
          </ul>
        </div>
        <div className='w-full lg:w-2/3 flex justify-center' data-aos='fade-left'>
          <img src={phase3} alt='Roadmap' className='w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[48vw] h-auto' />
        </div>
      </div>
    </div>
  );
}


