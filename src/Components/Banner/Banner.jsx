import React from "react";
import Form from "./Form";
import '../../App.css'
function Banner() {
  return (
    <div className="h-screen bg-[#FFF5E4] flex items-center md:justify-evenly justify-center md:flex-row flex-col" id="form">
      <h1 className="text-2xl font-montserrat font-bold mb-4">Contact Us</h1>
      <Form />
    </div>
  );
}

export default Banner;
