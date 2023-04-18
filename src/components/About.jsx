import React from 'react'

const About = () => {
  return (
    <div name = 'About' className='w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white pt-20' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Self-taught MERN stack developer passionate about building complete, end-to-end web applications and having a understanding of the different layers and technologies involved. Currently doing internship in Full stack web development from which I gained valuable skills in MongoDB, Express.js, React.js, and Node.js
            </p>
            <br />
            <p className='text-xl'>
             As a highly motivated and detail-oriented individual, I am eager to bring my skills and passion for technology to a new and challenging role. I have a solid understanding of software development principles and have a keen eye for detail, ensuring high-quality, user-friendly experiences. I am a dedicated and hardworking individual, always striving to improve and grow as a developer. I am confident in my ability to quickly learn new technologies and eager to take on new challenges to further develop my skills.
            </p>
        </div>
    </div>
  )
}

export default About