import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div
      className="bg-[url('/images/home-mobile.jpg')] md:bg-[url('/images/home.jpg')] bg-no-repeat bg-center bg-cover relative  h-screen "
      id="home"
    >
      <div class="absolute top-15 left-0 ">
        <div class="relative bg-[#f6c89f] px-6 py-3 md:w-[400px] w-[300px] h-[84px] shadow-md">
          <p class="absolute font-devanagari  text-[#8b1d1d] font-bold leading-snug text-xl md:text-[24px] z-10">
            मनात घर केलेलं घर इथं साकारतंय..
            <br />
            पाहिलेलं स्वप्न इथं आकार घेतंय...
          </p>
          <div class="absolute top-4 left-0 bg-[#f6c89f9b] ml-1 mt-1 px-6 py-3 w-[90%] h-[90%] z-0  rotate-6"></div>
        </div>
      </div>
      <div className="absolute w-[350px] md:w-[500px] bottom-0 left-5 md:left-1/5">
        <img src="/images/family.png" alt="family" />
      </div>
    </div>
  );
}

export default Hero;
