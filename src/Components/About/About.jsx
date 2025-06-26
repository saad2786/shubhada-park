import React from "react";

export default function About() {
  return (
    <>
      <section
        id="about"
        className=" bg-white font-montserrat  h-screen flex items-center justify-center overflow-hidden max-md:bg-[url('/images/2.jpeg')] bg-no-repeat bg-cover"
      >
        <div className=" max-md:hidden max-h-[600px]  py-28 pl-24 pr-5 flex-1/3 grid grid-cols-4 grid-rows-8 gap-2 ">
          <div className="col-span-2 row-span-4  overflow-hidden transition duration-300 hover:scale-103 object-cover">
            <img alt="HeroUI Fruit Image with Zoom" src="/images/1.jpeg" />
          </div>
          <div className="col-span-3 row-span-5 col-start-3 overflow-hidden transition duration-300 hover:scale-103">
            <img alt="HeroUI Fruit Image with Zoom" src="/images/2.jpeg" />
          </div>
          <div className="col-span-2 row-span-4 row-start-5 overflow-hidden transition duration-300 hover:scale-103">
            <img alt="HeroUI Fruit Image with Zoom" src="/images/3.jpeg" />
          </div>
          <div className="col-span-3 row-span-3 row-start-6 overflow-hidden transition duration-300 hover:scale-103">
            <img alt="HeroUI Fruit Image with Zoom" src="/images/4.jpeg" />
          </div>
        </div>
        <div className="z-20 flex-1/2 max-md:text-center max-md:p-5 max-md:flex-col max-md:flex max-md:justify-center max-md:text-white  max-md:items-center  max-sm:backdrop-blur-[3px] max-md:bg-transparent rounded-2xl max-md:w-fit  py-40 pr-24 pl-5 space-y-4">
          <p className="text-base max-md:text-[18px] mb-1 font-[600]   ">
            Introduction
          </p>
          <p className="text-3xl max-md:text-4xl uppercase font-[900]">
            About Us
          </p>
          <div className="md:flex-1/2 order-2 md:order-1 flex items-start  justify-center flex-col">
            <ul className="bg-[#f4f4f4ea] text-black text-left font-devanagari p-8 list-disc backdrop-blur-xl font-semibold rounded-xl opacity-75">
              <li>प्राधिकरण मंजूर अंतिम ले आऊट</li>
              <li>850 ते 4,000 स्क्वेअर फूटपर्यंत प्लॉट उपलब्ध.</li>
              <li>
                सर्व प्राथमिक गरजांची परिपूर्ण पाणी कनेक्शन + अंतर्गत रस्ते +
                गटर्स + विद्युत पुरवठा + अंतर्गत वीज खांब
              </li>
              <li>
                व स्वतंत्र 7/12 या सारख्या अनेक जीवनावश्यक सोयींनी परिपूर्ण.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
