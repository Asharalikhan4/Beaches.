import React from "react";
import maldivesVideo from "../assets/maldivesVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
        <video className="w-full h-full object-cover" src={maldivesVideo} autoPlay loop muted/>
        <div className="absolute w-full h-full left-0 bg-gray-900/30"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white text-center p-4">
                <h1>First Class Travel</h1>
                <h2 className="py-3">Top 1% Locations WorldWide</h2>
                <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
                    <div>
                    <input className="bg-transparent w-[300px] h-[40px] sm:w-[400px] font-[Poppins] focus:outline-none" type="text" placeholder="Search Destinations" />
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} style={{color: "#ffffffff"}} className="icon" /></button>
                    </div>
                </form>
            </div>
        </div>

  )
}

export default Hero