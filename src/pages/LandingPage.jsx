import React from "react";

import { Link } from "react-router-dom";

import bgImg from "../assets/imgs/ocean.jpg";

const LandingPage = () => {
  return (
    <div className="flex w-full">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex flex-col w-screen">
        {/* Hero Section */}
        <div className="relative mt-20 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            src={bgImg}
            alt="Hero Background"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div className="absolute inset-0 -z-10 h-full w-full bg-skin-primary bg-opacity-50 "></div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t to-slate-800 from-skin-start opacity-60"></div>
          <div
            className="hidden sm:block sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:blur-3xl"
            aria-hidden="true"
          >
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:translate-x-0"
            aria-hidden="true"
          >
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Style with us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-10 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10 text-white hover:text-skin-primary">
                <Link to="/tailwindComponents/Template"
                className="flex items-center justify-center border-white hover:border-skin-base hover:bg-skin-secondary
                 p-2 px-4 rounded-lg border-2 bg-opacity-50 ">
                 Template &rarr; </Link>
                <Link to="/tailwindComponents/Component"
                className="flex items-center justify-center border-white hover:border-skin-base hover:bg-skin-secondary
                 p-2 px-4 rounded-lg border-2 bg-opacity-50 ">
                   Components &rarr; </Link>
                <Link to="/tailwindComponents/Theme"
                className="flex items-center justify-center border-white hover:border-skin-base hover:bg-skin-secondary
                 p-2 px-4 rounded-lg border-2 bg-opacity-50 ">
                  Theme &rarr;</Link>
                <Link to="/tailwindComponents/AboutUs"
                className="flex items-center justify-center border-white hover:border-skin-base hover:bg-skin-secondary
                 p-2 px-4 rounded-lg border-2 bg-opacity-50 ">
                  About Us &rarr;</Link>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Templates
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    Stylish
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Full-time colleagues
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    300+
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Colorful themes
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    5
                  </dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    Use anytime anywhere
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    Free
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LandingPage;
