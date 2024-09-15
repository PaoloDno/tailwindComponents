import React from "react"
import SideBar from "../components/Sidebar";

const ThemePage = () => {


  return (
    <div className="flex w-max flex-row">
      
      <SideBar className="flex w-64"/>

      <div className="flex flex-col ml-20">
        <section className="section-style" id="sections1">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">SunsetGlow</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
            Sunset Glow
            <br></br>
            Primary: #FF6B6B (Soft Red)
            <br></br>
            Secondary: #FFD93D (Golden Yellow)
            <br></br>
            Accent: #1A535C (Deep Teal)
            <br></br>
            Background: #FFE66D (Warm Beige)
            </p>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Call to Action
              </a>
            </div>
          </div>
        </section>
        
        <section className="section-style" id="sections2">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Ocean Breeze</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
            Ocean Breeze

Primary: #2B7A78 (Teal Blue)
Secondary: #DEF2F1 (Pale Aqua)
Accent: #17252A (Dark Charcoal)
Background: #FEFFFF (Light Blue)
            </p>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Call to Action
              </a>
            </div>
          </div>
        </section>
        
        <section className="section-style" id="sections3">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Midnight Purple</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
            Midnight Purple

Primary: #6A0572 (Rich Purple)
Secondary: #9D4EDD (Violet)
Accent: #4A0D67 (Dark Indigo)
Background: #D9D7F1 (Pale Lilac)
            </p>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Call to Action
              </a>
            </div>
          </div>
        </section>
        
        <section className="section-style" id="sections4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Forest Mist</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
            Forest Mist

Primary: #355C7D (Muted Blue)
Secondary: #6C5B7B (Dusty Purple)
Accent: #C06C84 (Muted Pink)
Background: #F8B195 (Peach)
</p>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Call to Action
              </a>
            </div>
          </div>
        </section>
        
        <section className="section-style" id="sections5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Retro Vibes</h2>
            <p className="text-lg text-center text-gray-600 mb-6">

            Retro Vibes

Primary: #F67280 (Coral Pink)
Secondary: #C06C84 (Dusty Rose)
Accent: #6C5B7B (Eggplant Purple)
Background: #355C7D (Vintage Blue)
            </p>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Call to Action
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default ThemePage;
