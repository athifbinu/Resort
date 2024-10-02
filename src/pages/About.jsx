import React from "react";
import aboutmg from "../assets/images/about.jpeg";

const About = () => {
  return (
    <div>
      {/* Background image container */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-80 w-full"
        style={{ backgroundImage: `url(${aboutmg})` }}
      >
        {/* Text container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black shadow-2xl">About Us</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
