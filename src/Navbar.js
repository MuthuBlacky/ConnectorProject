import React, { useState } from 'react';
import {GiWaterRecycling} from "react-icons/gi"
import Hero from './Hero';
import { createContext  } from 'react';
const arr=['HOME','COMPANY','COLLABRATE','FIND PRODUCTS'];
// export const Mycontext = createContext({ toggle: false, settoggle: () => {} });

const Navbar = () => {
 
 
  
  return (
    <div>

      {/* <Mycontext.Provider value={{toggle,settoggle}} > */}
      <div className=''>
        <nav className=' gap-4 flex h-16 justify-around rounded-lg mt-3 ml-52 mr-24 mr  bg-gradient-to-r from-teal-900 to-teal-900 p-2' >
            <div className='flex items-center'>
            <GiWaterRecycling className='w-12 h-10 animate-spin'/>
            <h2 className=' text-2xl font-bold bg-gradient-to-r from-lime-600 to-green-500 bg-clip-text text-transparent'>RECYTECH</h2>
            </div>

            <ul className='flex flex-row gap-4 w-full h-full ml-10'>

                {
                    arr.map((s)=><button className='hover:underline hover:text-white font-capitalize font-serif'>{s}</button>)
                }
            </ul>
            <button className='w-16 h-12 ' > 
              click 
            </button>
               
            

               
            
        </nav>
    </div>


      {/* </Mycontext.Provider> */}
    </div>
  )
}

export default Navbar;