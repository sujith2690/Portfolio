import React from 'react'
import profile from '../assets/profile.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name='Home' className='h-fity w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl md:text-7xl font-bold text-white four'>
           Hai, I am Sujith Poonthottathil 
          </h2>
          <p className='text-gray-400 py-4 max-w-md'>
          A full stack web developer experienced in developing end-to-end web applications. I have a strong focus on writing clean and scalable code. I enjoy working collaboratively to build robust web solutions. Take a look at my portfolio to see some examples of my work.
          </p>
          <div>
            <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer' >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={23} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={profile} alt="profileimgg"  className='rounded-2xl mx-auto w-2/3 md:w-2/3 origin-center hover:rotate-1 hover:scale-95 duration-700 ' />
        </div>
      </div>
    </div>
  )
}

export default Home