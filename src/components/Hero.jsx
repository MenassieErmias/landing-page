import Typed from 'react-typed'
const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full text-center h-screen mx-auto flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl font-bold md:py-6">Grow with data.</h1>
                <div className='flex justify-center items-center '>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible finacing for </p>
                    <Typed className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4" strings={['BTB', 'BTC', 'SASS']} typeSpeed={140} backSpeed={130} loop />
                </div>
                <p className='md:2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero