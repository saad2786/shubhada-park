import React from "react";

const CustomMap = () => (
  <div className="sm:w-[50%] w-[100%] mt-5 border-4 border-gray-600">
    <iframe
      className="w-full h-[400px]"
      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Shubhada%20Park,Girgaon,Kolhapur+(Shubhada%20Park)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
      <a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">
        Mapa de población
      </a>
    </iframe>
  </div>
);

export default CustomMap;
