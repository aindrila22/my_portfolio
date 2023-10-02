import Image from "next/image";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import photo from "../public/photo.svg"

const Intro = () => {
  return (
    <div
      className="flex h-screen justify-center items-center flex-col"
      id="home"
    >
      <div className="w-full h-screen bg-[url('/bg.jpeg')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col bg-[#e62c46]/80 justify-center items-center backdrop-brightness-50 mx-auto">
          <div className="w-full flex md:flex-row flex-col justify-center items-center max-w-7xl mx-auto px-7">
          <div className="flex flex-col justify-end items-end w-full md:w-5/12  text-white mt-7">
              <Image src={photo} alt="" width={500} height={600}/> 
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-7/12 text-white  ">
              <span className="text-4xl py-10 font-semibold">I am</span>
              <span className="text-8xl font-extrabold pb-10">Aindrila</span>
              <span className="text-white text-5xl text-center font-semibold pb-10">
                <TypewriterComponent
                  options={{
                    strings: ["Frontend React Developer", "Next.js Fullstack Developer", "MERN stack developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              
            <button className="bg-white w-auto px-7 py-4 text-[#e62c46] my-5 capitalize font-medium text-lg ">Hire me</button>
         
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
