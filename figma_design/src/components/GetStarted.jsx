import  { useEffect } from 'react'
import '../styles/getStarted.css'
import arrow from '../../public/arrow.png'
import aos from "aos";
import "aos/dist/aos.css";


export const GetStarted=()=> {
  useEffect(() => {
    aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className='getStart'>
        <div className='w-full h-[-50px] flex justify-between items-center p-6 rounded-lg getbtn'>
      <h1 className='text-white text-5xl getbtntext'>Get Started</h1>
        <img src={arrow} alt='arrow' className='w-16 arrow'/>
        </div>
    </div>
  )
}

