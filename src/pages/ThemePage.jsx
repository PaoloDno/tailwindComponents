import React from "react";
import SideBar from "../components/Sidebar";

import img1 from "../assets/imgs/sunset.jpg";
import img2 from "../assets/imgs/ocean.jpg";
import img3 from "../assets/imgs/midnight.jpg";
import img4 from "../assets/imgs/forest.jpg";
import img5 from "../assets/imgs/retro.jpg";

const ThemePage = () => {
  return (
    <div className="flex w-full flex-row">
      <SideBar className="flex w-64" />

      <div className="flex flex-col ml-20 border-l-4 border-l-slate-500 space-y-10 w-3/4 bg-slate-100">

        {/* Sunset Theme */}
        <section className="theme-sunset relative w-full h-screen mx-auto mt-20 max-w-4xl overflow-hidden bg-skin-primary sm:rounded-2xl" id="sections1">
          <img className="absolute inset-0 h-full w-full object-cover opacity-80" src={img1} alt="Sunset theme" />
          <div className="from-skin-start via-skin-end absolute inset-0 bg-gradient-to-br to-transparent opacity-60"></div>
          <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-3xl font-extrabold text-skin-primary sm:text-4xl">
              <span className="block">This section theme is Sunset.</span>
              <span className="block">Sunset Glow</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-skin-primary">Veniam ad, numquam ipsum soluta tempora dolorum nisi ipsa tenetur quod necessitatibus minima quaerat maiores.</p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <p className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-primary px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-secondary">
                Use Sunset Theme
              </p>
            </div>
          </div>
        </section>

        {/* Ocean Theme */}
        <section className="theme-ocean relative w-full h-screen mx-auto mt-20 max-w-4xl overflow-hidden bg-skin-primary sm:rounded-2xl" id="sections2">
          <img className="absolute inset-0 h-full w-full object-cover opacity-80" src={img2} alt="Ocean theme" />
          <div className="from-skin-start via-skin-end absolute inset-0 bg-gradient-to-br to-transparent opacity-60"></div>
          <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-3xl font-extrabold text-skin-primary sm:text-4xl">
              <span className="block">This section theme is Ocean.</span>
              <span className="block">Ocean Breeze</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-skin-primary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, rerum.</p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <p className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-primary px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-secondary">
                Use Ocean Theme
              </p>
            </div>
          </div>
        </section>

        {/* Night Theme */}
        <section className="theme-night relative w-full h-screen mx-auto mt-20 max-w-4xl overflow-hidden bg-skin-primary sm:rounded-2xl" id="sections3">
          <img className="absolute inset-0 h-full w-full object-cover opacity-80" src={img3} alt="Night theme" />
          <div className="from-skin-start via-skin-end absolute inset-0 bg-gradient-to-br to-transparent opacity-60"></div>
          <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-3xl font-extrabold text-skin-primary sm:text-4xl">
              <span className="block">This section theme is Night.</span>
              <span className="block">Midnight Purple</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-skin-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni.</p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <p className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-primary px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-secondary">
                Use Night Theme
              </p>
            </div>
          </div>
        </section>

        {/* Forest Theme */}
        <section className="theme-forest relative w-full h-screen mx-auto mt-20 max-w-4xl overflow-hidden bg-skin-primary sm:rounded-2xl" id="sections4">
          <img className="absolute inset-0 h-full w-full object-cover opacity-80" src={img4} alt="Forest theme" />
          <div className="from-skin-start via-skin-end absolute inset-0 bg-gradient-to-br to-transparent opacity-60"></div>
          <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-3xl font-extrabold text-skin-primary sm:text-4xl">
              <span className="block">This section theme is Forest.</span>
              <span className="block">Forest Mist</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-skin-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus.</p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <p className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-primary px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-secondary">
                Use Forest Theme
              </p>
            </div>
          </div>
        </section>

        {/* Retro Theme */}
        <section className="theme-retro relative w-full h-screen mx-auto mt-20 max-w-4xl overflow-hidden bg-skin-primary sm:rounded-2xl" id="sections5">
          <img className="absolute inset-0 h-full w-full object-cover opacity-80" src={img5} alt="Retro theme" />
          <div className="from-skin-start via-skin-end absolute inset-0 bg-gradient-to-br to-transparent opacity-60"></div>
          <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-3xl font-extrabold text-skin-primary sm:text-4xl">
              <span className="block">This section theme is Retro.</span>
              <span className="block">Retro Vibes</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-skin-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.</p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <p className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-primary px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-secondary">
                Use Retro Theme
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ThemePage;
