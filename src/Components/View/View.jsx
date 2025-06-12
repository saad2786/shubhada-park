import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import CustomMap from "../Map/CustomMap";

function View() {
  return (
    <div className="h-fit   bg-white font-montserrat py-10 flex flex-col items-center justify-between">
      <h1 className="text-center text-xl font-bold mb-4 ">Plot View</h1>
      <div className=" mb-10  ">
        <Zoom>
          <img
            src="/images/3D.png"
            alt="Front View"
            className="w-[80%] mx-auto border-2 border-gray-600"
          />
        </Zoom>
      </div>
      <h1 className="text-center text-xl font-bold mb-4 ">Plot Top View</h1>
      <div className=" flex items-center justify-center mb-10 ">
        <Zoom>
          <img
            src="/images/top.png"
            alt="Front View"
            className="w-[80%] mx-auto border-4 border-gray-600"
          />
        </Zoom>
      </div>
      <h1 className="text-center text-xl font-bold mb-4 ">Address Details</h1>
      <div className="w-[80%] mb-10  flex flex-col sm:flex-row  items-center justify-center">
        <div className="pr-2">
          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Site Address -</span>
            1255/A Girgaon,Tal- Karveer, Dist-Kolhapur.
          </p>
          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Office Address -</span>
             2002 B ward, Opp Sai Temple,Mangalwar Peth,
            Kolhapur
          </p>
          <p className="text-lg font-normal">
            <span className="text-lg font-semibold">Contact -</span>
           77983 40199</p>
        </div>
        <CustomMap />
      </div>
    </div>
  );
}

export default View;
