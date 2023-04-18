import React from 'react'
import navbar from '../assets/portfolio/SocialME.JPG'
import navbar2 from '../assets/portfolio/Amaze.JPG'
import navbar3 from '../assets/portfolio/HungerEats.JPG'
import navbar4 from '../assets/portfolio/Netflix.JPG'
import navbar5 from '../assets/portfolio/Olx.JPG'
import navbar6 from '../assets/portfolio/Todo.JPG'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: navbar,
            link:"https://github.com/Alfa-ZORO/SocialMedia-SocialME",
            demo:"https://socialmeconnect.netlify.app/",
            name:"SocialME - Social media app"
        },
        {
            id: 2,
            src: navbar2,
            link:"https://github.com/Alfa-ZORO/AMAZE",
            demo:"https://www.amazemen.shop/",
            name:"Amaze - Ecommerce website"
        },
        {
            id: 3,
            src: navbar3,
            link:"https://hungereats.netlify.app/",
            demo:"https://github.com/Alfa-ZORO/Restaurant_Website",
            name:"Restaurant website"
            
        },
        {
            id: 4,
            src: navbar4,
            link:"https://github.com/Alfa-ZORO/Netflix-Clone",
            demo:"https://netflixtmdb.netlify.app/",
            name:"Netflix-clone"
        },
        {
            id: 5,
            src: navbar5,
            link:"https://github.com/Alfa-ZORO/Olx-Clone",
            demo:"https://olxclo.netlify.app/",
            name:"Olx-clone"
        },
        {
            id: 6,
            src: navbar6,
            link:"https://github.com/anasparambadan/todo-list-react-2.git",
            demo:"https://scheduletodo.netlify.app/",
            name:"Todo-list"
        },
    ]


    return (
        <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:p-0'>

                    {portfolios.map(({ id, src, link, demo,name }) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                                <span className="block text-center pt-2 text-gray-300 font-semibold">{name}</span>
                                <div className='flex items-center justify-center'>
                                    <a target={'_blank'} href={demo} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'   rel="noreferrer">Demo</a>
                                    <a target={'_blank'} href={link} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'  rel="noreferrer">Code</a>
                                </div>
                            </div>

                        )

                    })}

                </div>

            </div>
        </div >
    )
}

export default Portfolio