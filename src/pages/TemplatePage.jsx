import React from "react"
import SideBar from "../components/Sidebar"

const TemplatePage = () => {
  const sections = [
    {id: "top", label: "top"},
    {id: "mid", label: "mid"},
    {id: "footer", label: "end"},
  ]
  
  return (
    <div className="flex w-max flex-row">
      
      <SideBar sections={sections} className="flex w-64"/>

      <div className="flex flex-col">
        <section className="section-style" id="top">
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
        
        <section className="section-style" id="mid">
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
        
        <section className="section-style" id="footer">
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

export default TemplatePage;
