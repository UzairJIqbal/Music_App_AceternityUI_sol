"use client";

import { footer } from "framer-motion/client";
import { PinContainer } from "./ui/3d-pin";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <PinContainer
          title="Contact Us"
          href="#contact"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Contact Us
            </h2>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                <h3>Uzair Javaid</h3>
                <p>Lahore , Pakistan</p>
                <p>Email : Uzair.j1089@gmail.com</p>
                <p>Phone : 03091721181</p>
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

        <PinContainer
          title="Click any of the below to follow"
          href="#footer"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Follow Us
            </h2> 
            <div className="text-base !m-0 !p-0 font-normal flex space-x-4">
             <a href="#" className="hover:text-white transition-colors duration-300 ">FaceBook</a>
             <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
             <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

        
        <PinContainer
          title="Click any of the below to get to your faviourite Page"
          href="#links"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Quick Links
            </h2> 
            <div className="text-base !m-0 !p-0 font-normal flex space-x-4">
             <a href="#" className="hover:text-white transition-colors duration-300 ">Home</a>
             <a href="#" className="hover:text-white transition-colors duration-300">Our Courses</a>
             <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

         <PinContainer
          title="About Us"
          href="#about"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              About Us
            </h2> 
            <div className="text-base !m-0 !p-0 font-normal">
              <p>Music School is a premier instituion dedicated to teaching the art and science music. We nature talent and nourished them to be the best in the world</p>            
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>

      <p className="flex flex-row items-center justify-center text-center mt-28">Copy@ 2024 Music School. All rights reserved </p>
    </footer>
  );
};

export default Footer;
