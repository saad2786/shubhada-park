import React from "react";

export default function About() {
  return (
    <>
      <section
        id="about"
        className=" bg-white font-montserrat  h-screen flex items-center justify-center overflow-hidden max-md:bg-[url('/images/2.jpeg')] bg-no-repeat bg-cover"
      >
      
        <div className="z-20  max-md:text-center max-md:p-5  max-md:flex max-md:flex-col max-md:justify-center max-md:text-white  max-md:items-center  max-sm:backdrop-blur-[3px] max-md:bg-transparent rounded-2xl max-md:w-fit  py-40 pr-24 pl-5 space-y-4">
          <p className="text-base text-center max-md:text-[18px] mb-1 font-[600]   ">
            Introduction
          </p>
          
          <p className="text-3xl text-center max-md:text-4xl uppercase font-[900]">
            About Us
          </p>
          <div className="md:flex-1/2 order-2 md:order-1 flex items-start  justify-center flex-col">
            <ul className="bg-[#f4f4f4ea] text-black text-xl text-left list-disc font-devanagari p-8 space-y-2 backdrop-blur-xl font-semibold rounded-xl opacity-75">
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
