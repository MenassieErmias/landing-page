import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='text-white flex justify-between h-24 items-center max-w-[1200px] mx-auto px-4'>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                LANDING.
            </h1>
            <ul className="flex hidden">
                <li className="p-4"><a href="#">Home</a></li>
                <li className="p-4"><a href="#">Company</a></li>
                <li className="p-4"><a href="#">Resources</a></li>
                <li className="p-4"><a href="#">About</a></li>
                <li className="p-4"><a href="#">Contact</a></li>
            </ul>
            <div onClick={handleNav}>
                {
                    !nav ? <AiOutlineClose size={20} /> :
                        <AiOutlineMenu size={20} />
                }
            </div>
            {

            }
            <div className={
                !nav ?
                    'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'
            }>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                    LANDING.
                </h1>
                <ul className='uppercase p-4'>
                    <li className="p-4 border-b border-gray-600"><a href="#">Home</a></li>
                    <li className="p-4 border-b border-gray-600"><a href="#">Company</a></li>
                    <li className="p-4 border-b border-gray-600"><a href="#">Resources</a></li>
                    <li className="p-4 border-b border-gray-600"><a href="#">About</a></li>
                    <li className="p-4"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar