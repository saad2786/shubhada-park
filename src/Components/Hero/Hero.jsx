import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className=" bg-[url('/images/3.jpeg')] bg-no-repeat bg-cover ">
      <div className=" flex items-center justify-center gap-10 flex-col md:flex-row  bg-no-repeat h-screen bg-cover backdrop-brightness-60">
        <div className="container  text-white md:flex-1/2 order-2 flex md:items-end items-center px-8 md:pr-10 justify-center flex-col">
          <p className="mb-2 font-semibold text-2xl font-antiqua  ">
            मनात घर केलेलं,
          </p>
          <p className="mb-2  font-semibold text-2xl font-antiqua">
            घर इथं साकारताय...
          </p>
          <div className="mb-4 ">
            <img src="/images/Canva.png"  alt="logo" width={200} />
          </div>
          <a className="p-[3px] relative" href="#form">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF407D] to-[#F95454] rounded-lg" />
            <div className="px-8 py-2 font-semibold bg-black rounded-[6px]  relative group transition duration-200 font-montserrat text-white hover:bg-transparent">
              Contact Us
            </div>
          </a>
        </div>
        <div className="md:flex-1/2 order-2 md:order-1 flex items-start md:pl-10 px-4 justify-center flex-col">
          <ul className="bg-[#f4f4f4ea] font-devanagari p-8 list-disc backdrop-blur-xl font-semibold rounded-xl opacity-75">
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
    </div>
  );
}

export default Hero;
