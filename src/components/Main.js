import React from 'react';
import '../css/Main.css';
import {BsInstagram,BsFacebook} from 'react-icons/bs';
function Main(){
return (
    <div className='backg'>
       <div className='main-head font-sans  sm:text-justify   lg:text-left text-white flex-col mt-40 ml-20 list-none'>
        <li className='mmk font-medium text-5xl'>Explore the</li>
        <li className='mmh font-extrabold text-7xl mt-3'>Tesseract</li>
        <li className=' tptext font-light ml-2 mt-5 w-2/5 '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <div className='socials mt-10  list-none flex ml-2 gap-10'>
            <li className='hover:text-blue-500 hover:duration-500 hover:ease-in-out cursor-pointer'><BsInstagram/></li>
            <li className='hover:text-blue-500 hover:duration-500 hover:ease-in-out cursor-pointer'><BsFacebook/></li>
            
        </div>
        <button className='space animate-pulse '>Step into the spaceship</button>
        </div>

    </div> 
);













}

export default Main;