import React from "react";
import { PiCompassRose } from "react-icons/pi";
import { GiKitchenTap } from "react-icons/gi";
import { GiStreetLight } from "react-icons/gi";
import { ImRoad } from "react-icons/im";

import { GiGate } from "react-icons/gi";
import { FaPlugCircleBolt } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { MdTempleHindu } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { PiParkDuotone } from "react-icons/pi";
import { GiShop } from "react-icons/gi";
import { GiHills } from "react-icons/gi";

export default function Facility() {
  return (
    <section
      id="facility"
      className="h-fit  flex flex-col gap-2 bg-[#FFF5E4] py-12 max-sm:space-y-5 "
    >
      <div className="flex  flex-col font-devangari items-center justify-center gap-8 max-md:px-1  ">
        <p className="text-3xl font-montserrat  max-md:px-2 uppercase text-center  font-bold">
          Facilities We Provide
        </p>
        <div className="flex items-center overflow-auto flex-wrap  justify-center gap-[10px] sm:gap-[30px]  max-sm:space-y-4  ">
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2     ">
            <PiCompassRose  size={70} color="#213448" />
            <p className="mt-2">वास्तु शास्त्रानुसार प्लॉटची मांडणी</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2 md:   ">
            <GiKitchenTap size={70} color="#213448" />
            <p className="mt-2">प्रत्येक प्लॉटला स्वतंत्र नळ कनेक्शन</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2    ">
            <GiStreetLight size={70} color="#213448" />
            <p className="mt-2">आकर्षित स्ट्रीट लाईट</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2  ">
            <ImRoad size={70} color="#213448" />
            <p className="mt-2">अंतर्गत ३० फुटांचे रस्ते</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2     ">
            <GiGate size={70} color="#213448" />
            <p className="mt-2">आकर्षक प्रवेशद्वार</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2 md:  md: ">
            <FaRoad size={70} color="#213448" />
            <p className="mt-2">नियोजित रिंगरोड पासून अगदी जवळच</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2    ">
            <FaSchool size={70} color="#213448" />
            <p className="mt-2">जवळच सर्वात उत्तम इंग्रजी माध्यम शाळा</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2  ">
            <FaPlugCircleBolt size={70} color="#213448" />
            <p className="mt-2">प्रत्येक प्लॉट पर्यंत वीज कनेक्शन</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2    ">
            <GiParkBench size={70} color="#213448" />
            <p className="mt-2">ओपन स्पेस</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2    ">
            <MdTempleHindu size={70} color="#213448" />
            <p className="mt-2">मंदिर</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2    ">
            <FaHospital size={70} color="#213448" />
            <p className="mt-2">हॉस्पिटल जवळच</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2 ">
            <PiParkDuotone size={70} color="#213448" />
            <p className="mt-2">ऑनसाईटला वास्तव्य उपलब्ध</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2    ">
            <GiShop size={70} color="#213448" />
            <p className="mt-2">भाजीपाला जवळच उपलब्ध</p>
          </div>
          <div className="flex items-center flex-col border border-stone-200 transform  sm:h-64 sm:w-64  transition duration-300 hover:scale-110 w-[250px] py-4 min-h-[150px] px-2 bg-[#F8FAFC] justify-center rounded-xl shadow-lg max-md:w-[45%] text-center text-sm font-semibold max-md:px-2 sm:mb-0 mb-4 ">
            <GiHills size={70} color="#213448" />
            <p className="mt-2">प्रदूषण मुक्त हिल स्टेशनचा फील</p>
          </div>
        </div>
      </div>
    </section>
  );
}
