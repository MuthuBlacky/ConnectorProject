import React from 'react'

const Sidebar = () => {
  return (
    <div className='top-2 bg-cover absolute left-0 h-full w-[180px] rounded-md bg-[url(https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R1JFRU58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)] '>

        <h1 className='font-bold text-2l'>
            RECYTECH
        </h1>
        <ul className='gap-2 flex flex-col uppercase text-white px-4 '>

            <li className='border-b-2 mt-2'>
                HOME

            </li>
            <li  className='border-b-2 mt-2'>
                HOME
                
            </li>
            <li className='border-b-2 mt-2'>
                HOME
                
            </li>
            <li className='border-b-2 mt-2 border-gray-600'>
                HOME
                
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;