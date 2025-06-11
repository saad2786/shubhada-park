import React from "react";


export default function About() {
  return (
    <>
      <section id="about" className=" bg-white font-montserrat  h-screen flex overflow-hidden max-md:bg-[url('/images/2.jpeg')] bg-no-repeat bg-cover">
 
        <div className=" max-md:hidden  py-28 pl-24 pr-5 flex-1/3 grid grid-cols-4 grid-rows-8 gap-2 ">
          <div className="col-span-2 row-span-4  overflow-hidden transition duration-300 hover:scale-103 object-cover">
            <img
              alt="HeroUI Fruit Image with Zoom"
              src="/images/1.jpeg"
             
              
            />
          </div>
          <div className="col-span-3 row-span-5 col-start-3 overflow-hidden transition duration-300 hover:scale-103">
            <img
              alt="HeroUI Fruit Image with Zoom"
              src="/images/2.jpeg"
            
            />
          </div>
          <div className="col-span-2 row-span-4 row-start-5 overflow-hidden transition duration-300 hover:scale-103">
            <img
              alt="HeroUI Fruit Image with Zoom"
              src="/images/3.jpeg"
             
            />
          </div>
          <div className="col-span-3 row-span-3 row-start-6 overflow-hidden transition duration-300 hover:scale-103">
            <img
              alt="HeroUI Fruit Image with Zoom"
              src="/images/4.jpeg"
             
            />
          </div>
        </div>
        <div className="z-20 flex-1/2 max-md:text-center max-md:p-5 max-md:flex-col max-md:flex max-md:justify-center max-md:text-white  max-md:items-center  max-sm:backdrop-blur-[3px] max-md:bg-transparent rounded-2xl max-md:w-fit  py-40 pr-24 pl-5 space-y-4">
          <p className="text-base max-md:text-[18px] font-[500]   ">Introduction</p>
          <p className="text-2xl max-md:text-3xl uppercase font-extrabold">About Us</p>
          <p className="text-sm max-md:text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, unde
            reprehenderit molestiae, debitis magnam quibusdam vero velit a rerum
            amet officia quidem, iure illum.
          </p>
        </div>
      </section>
    </>
  );
}
