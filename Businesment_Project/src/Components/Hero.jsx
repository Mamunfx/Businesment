import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero my-12 py-4">
        <div className="hero-content flex-col lg:flex-row justify-center">
          <img
            src="https://i.ibb.co/LJsHkZK/business-people-meeting-office.jpg"
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div className="w-7/12">
            <h1 className="text-5xl font-bold">Empowerment through effective management of your business</h1>
            <p className="py-6">
              Maximize your business potential with our empowering and powerful management strategies, unloacking success like never before. Expereince tranformative growth and acheive your goals with our expert guidance and support.
            </p>
            <button className="btn btn-primary bg-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
