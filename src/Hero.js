import React, { useContext } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { GiWaterRecycling } from 'react-icons/gi';
import { Mycontext } from './Navbar';
import Typed from "react-typed";
import doodle from './doodle.jpg';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import App from './App';

const Hero = ({click}) => {
  // const { toggle, settoggle } = useContext(Mycontext);

  // useEffect(() => {
  //   console.log(toggle); // This will log the value of toggle when it changes.
  // }, [toggle]); 
  return (
    <>
    <div className='w-full h-full flex '>
      { click &&   <Sidebar/>

      }
      
    <div className='lg:w-[1200px] sm:w-[400px] sm:h-[300px] ml-52 rounded-sm bg-gradient-to-r from-gray-50 to-zinc-400 m-8 lg:h-[720px] flex flex-col p-12'>
     
     <div className='flex gap-4 h-[400px]'>
       <div className='flex items-center'>
         <h1 className='lg:text-5xl ml-8 bg-gradient-to-r from-green-300 to-teal-900 bg-clip-text text-transparent font-bold font capitalize'>
          
           <Typed strings={[' Reviving communities and renewing the planet'] } className='font-bolD bg-gradient-to-r from-green-300 to-teal-900 bg-clip-text text-transparent font-bold' typeSpeed={100} backSpeed={50} loop/>
         </h1>
         <div className='lg:w-16 bg-gradient-to-r from-green-900 to-green-800 sm:w-6 sm:h-4 rounded-lg mt-28 mr-32 lg:h-10 animate-spin'>
           <GiWaterRecycling className='w-full h-full ' />
         </div>
       </div>

       <img
         src='https://media.istockphoto.com/id/1253713039/photo/your-life-improved-top-view-of-many-hands-holding-different-waste-garbage-types-with.jpg?s=612x612&w=0&k=20&c=UP1OOyM9WbuOUoZvIt-HEgSyw8rlXk4gI3MJjdU9RRA='
         alt='Description of the image'
         className='lg:w-1/3 lg:h-full rounded-md sm:w-10 sm:h-12'
       />
     </div>
     <div></div>

     <div className='ml-32 mb-[300px] bg-gradient-to-r from-emerald-300 to-green-800 shadow-lg h-72 w-96 rounded-sm p-3 flex flex-col items-start'>
       <h1 className='text-black'>
        
          INDIA generates 62 million tonnes of waste annualy ,with only 70% of the waste collected.out of which million tonnes are treated but concerning 31 million tonnes end up in landfills.<marker className='text-black font-bold'>RECYTECH </marker> aims to solve this problem by connecting  waste generators with producers and prompting responsible waste management
       </h1>

       <button className='focus:ring-4 bg-gradient-to-r from-blue-600 to-violet-800 ml-28 justify-around w-36 h-12 rounded-md flex items-center gap-1 px-2'>
         CONNECT
         <BsArrowBarRight />
       </button>
  
     </div>
     
   </div>

      
    </div>
  
    </>
  );
};

export default Hero;
