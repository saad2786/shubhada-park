import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import './Footer.css'

function Footer() {
  return (
    <>
    <div class="overflow-hidden font-devangari bg-amber-200 shadow-sm  h-8 flex items-center justify-center ">
    <div class="marquee-content flex justify-center gap-4 items-center animate-marquee">
        <div className="flex list-disc">
            <div className="w-[700px] italic font-semibold">बुकिंग व अधिक माहितीसाठी संपर्क : ऑफिस: २००२ बी वॉर्ड, साई मंदिर जवळ, मंगलवार पेठ, कोल्हापूर.</div>
            <div className="w-[700px] italic font-semibold">बुकिंग व अधिक माहितीसाठी संपर्क : ऑफिस: २००२ बी वॉर्ड, साई मंदिर जवळ, मंगलवार पेठ, कोल्हापूर.</div>
            <div className="w-[700px] italic font-semibold">बुकिंग व अधिक माहितीसाठी संपर्क : ऑफिस: २००२ बी वॉर्ड, साई मंदिर जवळ, मंगलवार पेठ, कोल्हापूर.</div>
        </div>
    </div>

    </div>
    <footer className="h-[100px] max-md:h-[20vh] bg-gray-700 py-10 text-[10px] flex max-md:flex-col justify-between items-center px-5 text-slate-300">
      <div className=" space-y-4 order-2 sm:order-0 mb-4">
        <div className="space-x-2">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-300">
            Contact Us
          </a>
        </div>
        <div className="space-x-2 flex justify-evenly">
          <a href="https://www.instagram.com/shubhada.park/#" target="_blank" className="hover:text-blue-300">
           <FaInstagram size={25} />
          </a>
          <a href="#about" target="_blank"  className="hover:text-blue-300">
            <FaFacebook size={25}/>
          </a>
          <a href="#contact" target="_blank"  className="hover:text-blue-300">
            <FaTwitter size={25}/>
          </a>
        </div>
      </div>
      <div className="order-0 sm:order-1 mb-4">
        <a href="#home">
          <p className="hover:text-blue-300">Brand Name</p>
        </a>
      </div>
      <div className="order-4">
        <p>Copyright © 2025 Reiborn. All rights reserveds</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
