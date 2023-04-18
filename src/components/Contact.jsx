import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        toast.success('Your Message is Sent...', {
            position: "top-right"
        })
        e.target.reset()
    };
    return (
        <div name='Contact' className='w-full h-fit bg-gradient-to-b from-black to-gray-800  text-white pt-16'>
            <Toaster />
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Contact me by submitting the form</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
                        <input type="text" required name='name' placeholder='Enter Your Name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="email" required name='email' placeholder='Enter Your Email'
                            className='my-4  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea name="message" required rows="6" placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button type='submit' className='text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-blue-500 to-blue-600 hover:scale-105 duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact