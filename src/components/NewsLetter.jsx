import React from 'react'

const NewsLetter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips and tricks to optimize your flow?
                    </h1>
                    <p>Sign up for a newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-2 text-black rounded-md' type="email" name='email' id='email' placeholder='Enter E-mail' />
                        <button className='bg-green-900 text-white rounded-md font-bold w-[200px] mx-2 my-6 px-6 py-3'>Notify me</button>
                    </div>
                    <p>
                        We care about your privacy. Read our <a className='text-green-900 ' href='#'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter