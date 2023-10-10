import React from 'react'
import navbar from '../assets/portfolio/SocialME.JPG'
import navbar2 from '../assets/portfolio/Amaze.JPG'
import navbar3 from '../assets/portfolio/HungerEats.JPG'
import navbar4 from '../assets/portfolio/Netflix.JPG'
import navbar5 from '../assets/portfolio/Olx.JPG'
import navbar6 from '../assets/portfolio/Todo.JPG'
import navbar7 from '../assets/portfolio/browsBooks.JPG'
import navbar8 from '../assets/portfolio/netflixAngular.JPG'
import navbar9 from '../assets/portfolio/calculator.JPG'
import navbar10 from '../assets/portfolio/cashDrawer.JPG'
import navbar11 from '../assets/portfolio/accountsBalance.JPG'
import navbar12 from '../assets/portfolio/loginUi.JPG'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: navbar,
            link: "https://github.com/sujith2690/SocialMedia-SocialME",
            demo: "https://socialmeconnect.netlify.app/",
            name: "SocialME - Social media app"
        },
        {
            id: 2,
            src: navbar2,
            link: "https://github.com/sujith2690/AMAZE",
            demo: "https://adventurous-pink-pea-coat.cyclic.app/",
            name: "Amaze - Ecommerce website"
        },
        {
            id: 7,
            src: navbar7,
            link: "https://github.com/sujith2690/Browse-books-Client",
            demo: "https://browsbooks.netlify.app/",
            name: "BrowsBooks"
        },
        {
            id: 3,
            src: navbar3,
            link: "https://github.com/sujith2690/Restaurant_Website",
            demo: "https://hungereats.netlify.app/",
            name: "Restaurant website"

        },
        {
            id: 4,
            src: navbar4,
            link: "https://github.com/sujith2690/Netflix-Clone",
            demo: "https://netflixtmdb.netlify.app/",
            name: "Netflix-React"
        },
        {
            id: 8,
            src: navbar8,
            link: "https://github.com/sujith2690/Netflix-Angular",
            demo: "https://angularnetflix.netlify.app/",
            name: "Netflix-Angular"
        },
        {
            id: 5,
            src: navbar5,
            link: "https://github.com/sujith2690/Olx-Clone",
            demo: "https://olxclo.netlify.app/",
            name: "Olx-clone"
        },
        {
            id: 9,
            src: navbar9,
            link: "https://github.com/sujith2690/Calculator",
            demo: "https://mycalculaters.netlify.app/",
            name: "Calculator"
        },
        {
            id: 6,
            src: navbar6,
            link: "https://github.com/sujith2690/Todo-List",
            demo: "https://nowtodolist.netlify.app/",
            name: "Todo-list"
        },
        {
            id: 12,
            src: navbar12,
            link: "https://github.com/sujith2690/Slikk.ai-login",
            demo: "https://newlogins.netlify.app/",
            name: "Login"
        },
        {
            id: 10,
            src: navbar10,
            link: "https://github.com/sujith2690/Cash-Register",
            demo: "https://cashdrawer.netlify.app/",
            name: "Cash Drawer"
        },

        {
            id: 11,
            src: navbar11,
            link: "https://github.com/sujith2690/Accounts-Craxinno-Tech",
            demo: "https://cashpayment.netlify.app/",
            name: "Cash-Drawer"
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

                    {portfolios.map(({ id, src, link, demo, name }) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                                <span className="block text-center pt-2 text-gray-300 font-semibold">{name}</span>
                                <div className='flex items-center justify-center'>
                                    <a target={'_blank'} href={demo} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105' rel="noreferrer">Demo</a>
                                    <a target={'_blank'} href={link} className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105' rel="noreferrer">Code</a>
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