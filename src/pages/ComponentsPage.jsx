import React from "react"
import SideBar from "../components/Sidebar";

const ComponentPage = () => {


  return (
    <div className="flex w-max flex-row">
      
      <SideBar />

      <div className="flex flex-col ml-20">
        <section className="section-style" id="sections1">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Section Title</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
              This is a sample section using Tailwind CSS. You can add any content here, such as text, images, or forms.
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Section Title</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
              This is a sample section using Tailwind CSS. You can add any content here, such as text, images, or forms.
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Section Title</h2>
            <p className="text-lg text-center text-gray-600 mb-6">
              This is a sample section using Tailwind CSS. You can add any content here, such as text, images, or forms.
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

export default ComponentPage;
