import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Navbar = () => {
  return (
    <div className=' w-full justify-center flex items-center bg-transparent shadow-sm backdrop-blur-md sticky top-0 left-0 z-40'>
     <div className='flex justify-between p-5 py-6 items-center top-0 left-0 w-full max-w-screen-2xl'>
      <div>
        <h1 className='tracking-wide font-bold text-xl'>MATHS <span className='text-red-700 underline font-black'>4</span> O/L</h1>
      </div>
      <div className='md:contents hidden'>
        <ul className='flex'>
            <li className='mx-4 font-semibold hover:text-red-700 cursor-pointer'>HOME</li>
            <li className='mx-4 font-semibold hover:text-red-700 cursor-pointer'>PAPERS</li>
            <li className='mx-4 font-semibold hover:text-red-700 cursor-pointer'>TUTOR</li>
            <li className='mx-4 font-semibold hover:text-red-700 cursor-pointer'>ABOUT</li>
        </ul>
      </div>
      <div className='md:hidden' onClick={
        ()=>{
            const x = document.getElementById ("list");
            x.style.right = "0px";
        }
      } >
        <DensityMediumIcon className='cursor-pointer hover:text-red-700' />
      </div>

     </div>
     <div id='list' className='absolute top-0 right-[-300px] duration-300 ease-in'>
        <ul  className=' md:hidden shadow-2xl bg-gradient-to-b from-[#f2f4f5] to-[#eef1f3]/100 backdrop-blur-xl rounded-lg overflow-hidden flex flex-col justify-start items-center w-[300px] gap-0 h-screen p-4 z-40 absolute top-0 right-0' >
            <div className='cursor-pointer text-black border border-black p-1 rounded-full bg-transparent mb-4' 
            onClick={()=>{
              const y = document.getElementById ("list");
              y.style.right = "-300px";
            }}>
              <CloseIcon className='' />
            </div>
            <div className='flex justify-between items-center w-full px-3 cursor-pointer hover:bg-gray-200 duration-300 p-6 rounded-sm border-b border-gray-300'>
              <div className='flex gap-3'>
                <HomeIcon />
                <li className='font-medium cursor-pointer'>Home</li>
              </div>
              <ArrowForwardIosIcon className='text-black animate-pulse' />
            </div>
            <div className='flex justify-between items-center w-full px-3 cursor-pointer hover:bg-gray-200 duration-300 p-6 rounded-sm border-b border-gray-300'>
              <div className='flex gap-3'>
                <ArticleIcon />
                <li className='font-medium cursor-pointer'>Papers</li>
              </div>
              <ArrowForwardIosIcon className='text-black animate-pulse' />
            </div>
            <div className='flex justify-between items-center w-full px-3 cursor-pointer hover:bg-gray-200 duration-300 p-6 rounded-sm border-b border-gray-300'>
              <div className='flex gap-3'>
                <PersonIcon />
                <li className='font-medium cursor-pointer'>Tutor</li>
              </div>
              <ArrowForwardIosIcon className='text-black animate-pulse' />
            </div>
            <div className='flex justify-between items-center w-full px-3 cursor-pointer hover:bg-gray-200 duration-300 p-6 rounded-sm border-b border-gray-300'>
              <div className='flex gap-3'>
                <InfoIcon />
                <li className='font-medium cursor-pointer'>About</li>
              </div>
              <ArrowForwardIosIcon className='text-black animate-pulse' />
            </div>
        </ul>
     </div>
    </div>
  )
}

export default Navbar
