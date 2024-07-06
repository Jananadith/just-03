import React from 'react'
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Navbar from '../../Navbar';
import {useTypewriter , Cursor} from 'react-simple-typewriter';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import maths from './images/maths.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {

  const [text] = useTypewriter({
    words: ['Learn Well .' , 'Be Smart .' , 'Go To School .'],
    loop: {},
  });

  return (
    <div className='overflow-x-hidden'>
        <Navbar />
    <div className=' h-[calc(100vh-76px)] md:overflow-hidden  ' id='main-container'>
      <div className=' flex justify-center h-full items-center'>
        <div className="w-[40%] opacity-70 h-[40%] rounded-full bg-blue-100 blur-[70px] md:blur-[200px] left-[10%] absolute top-32 z-10"></div>
        <div className="w-[40%] opacity-70 h-[40%] rounded-full bg-red-100 blur-[70px] md:blur-[200px] left-[50%] absolute top-52 z-10"></div>
        <div className="w-[40%] opacity-70 h-[40%] rounded-full bg-green-100 blur-[70px] md:blur-[200px] left-[20%] absolute top-96 z-10"></div>
        <div className=' z-20 flex flex-col md:mt-[160px]  my-auto justify-center items-center text-left w-screen md:flex-row max-w-[1500px] mx-auto'>
          <div className='z-20 w-[95vw] flex flex-col justify-between max-w-[1000px] '>
            <h1 className='bg-transparent leading-tight z-20 relative text-5xl m-5 mb-5 font-normal font-heroFont2 bg-black tracking-wide text-black bg-clip-text'><span className='text-red-700'>Mathematics</span> For Ordinary Level Students</h1>
            <p className='text-2xl text-black text-left ml-5 font-semibold tracking-widest z-20'>Always <span className='text-red-700'>{text}</span>
            <span className='text-red-500'><Cursor cursorBlinking='' /></span>
            </p>
            <div className='text-red-700 flex items-center cursor-pointer justify-between w-32 p-3 m-8 bg-transparent z-20 ml-5 duration-200 ease-in border-2 hover:bg-red-200 border-red-700 '>
              <p className='font-semibold'>About Us</p>
              <NavigateNextIcon />
            </div>
          </div>
          <div className='z-20 w-full h-full py-5 '>
            <div>
            <div className='flex justify-between w-[45%] p-3 rounded-lg bg-white border border-gray-50 shadow-md mx-auto relative mb-[-20px]'>
              <WhatsAppIcon className='text-gray-600 hover:text-black cursor-pointer m-1' />
              <FacebookIcon className='text-gray-600 hover:text-black cursor-pointer m-1' />
              <InstagramIcon className='text-gray-600 hover:text-black cursor-pointer m-1' />
              <GitHubIcon className='text-gray-600 hover:text-black cursor-pointer m-1' />
            </div>  
            <div className='flex flex-col items-center overflow-hidden bg-white shadow-md rounded-lg w-[80%] h-[100%] max-h-[450px] m-auto mt-0' >
              <h1 className='text-3xl text-red-700 my-6'>Mathematics</h1>
              <div className='flex items-center justify-center max-h-[450px]'>
                <img src={maths} alt="maths" className='w-[45%] mx-2 p-1 pb-4 ' />
                <p className='overflow-y-scroll p-1 my-5 max-h-[200px] mt-0 w-[40%]'>Mathematics is the study of numbers, shapes, and patterns. The word comes from the Greek μάθημα (máthema), meaning "science, knowledge, or learning", and is sometimes shortened to math or maths. It is the study of: Numbers: including how things can be counted.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
