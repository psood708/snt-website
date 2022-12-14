import React,{useState} from 'react';
import immg from '../img/tess.png'
import '../css/Navbar.css';
// import { Link } from "react-router-dom";
function Navbar(){
   const hamburgerr = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-main-menu")
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    } else {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  }
   return (<div className='text-xl bg-black opacity-80 max-h-28 flex md:gap-x-12 lg:gap-x-12 xl:gap-x-72'>
    
     <div className='text-white m-0 p-0 scale-50 h-0' ><img alt='tesseract' src={immg} className='scale-90 lg:mr-80 md:mr-24 md:ml-1 sm:mr-50 h-56 cursor-pointer'></img></div>
     <div className='text-right lg:invisible md:invisible sm:invisible xl:visible ml-28 sm:ml-1 menu font-mono font-bold text-white p-8 list-none flex   '>
       <div >
         <ul className='flex xl:gap-5 gap-6'>
               <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Home</li>
               <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500 animate-pulse hover:animate-none'>EDM</li>
               <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Gallery</li>
               <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Events</li>
               <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Schedule</li>
               <li className='hover:text-blue-500  cursor-pointer hover:ease-in-out duration-500'>About us</li>
               </ul>
       </div>
       <div>  
         <ul className='nav-main-menu sm:invisible  list-none  xl:gap-5 gap-6'>
                     <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Home</li>
                     <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500 animate-pulse hover:animate-none'>EDM</li>
                     <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Gallery</li>
                     <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Events</li>
                     <li className='hover:text-blue-500 cursor-pointer hover:ease-in-out duration-500'>Schedule</li>
                     <li className='hover:text-blue-500  cursor-pointer hover:ease-in-out duration-500'>About us</li>
               </ul>
         </div>
       <div className="hamburger space-y-2 hover:animate-none sm:visible lg:visible xl:invisible p-2 hover:text-blue-500 cursor-pointer" onClick={ToggleSwitch}>
            <div className="bar block w-8 h-0.5 bg-slate-100 "></div>
            <div className="bar block w-6 h-0.5 bg-slate-100 "></div>
            <div className="bar block w-8 h-0.5 bg-slate-100 "></div>
        </div>
      
     </div>
    
    
   </div> 
   );
}
export default Navbar;