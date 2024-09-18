import React from "react";
import SideBar from "../components/Sidebar";

const ThemePage = () => {
  const themes = [
    {
      id: "sections1",
      theme: "sunset",
      title: "Sunset Glow",
      description:
        "Veniam ad, numquam ipsum soluta tempora dolorum nisi ipsa tenetur quod necessitatibus minima quaerat maiores, ullam architecto rerum quia sapiente, libero ea.",
      colors: {
        primary: "#FF6B6B (Soft Red)",
        secondary: "#FFD93D (Golden Yellow)",
        accent: "#1A535C (Deep Teal)",
        background: "#FFE66D (Warm Beige)",
      },
    },
    {
      id: "sections2",
      theme: "ocean",
      title: "Ocean Breeze",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, rerum.",
      colors: {
        primary: "#2B7A78 (Teal Blue)",
        secondary: "#DEF2F1 (Pale Aqua)",
        accent: "#17252A (Dark Charcoal)",
        background: "#FEFFFF (Light Blue)",
      },
    },
    {
      id: "sections3",
      theme: "night",
      title: "Midnight Purple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni.",
      colors: {
        primary: "#6A0572 (Rich Purple)",
        secondary: "#9D4EDD (Violet)",
        accent: "#4A0D67 (Dark Indigo)",
        background: "#D9D7F1 (Pale Lilac)",
      },
    },
    {
      id: "sections4",
      theme: "forest",
      title: "Forest Mist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus.",
      colors: {
        primary: "#355C7D (Muted Blue)",
        secondary: "#6C5B7B (Dusty Purple)",
        accent: "#C06C84 (Muted Pink)",
        background: "#F8B195 (Peach)",
      },
    },
    {
      id: "sections5",
      theme: "retro",
      title: "Retro Vibes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, commodi.",
      colors: {
        primary: "#F67280 (Coral Pink)",
        secondary: "#C06C84 (Dusty Rose)",
        accent: "#6C5B7B (Eggplant Purple)",
        background: "#355C7D (Vintage Blue)",
      },
    },
  ];

  return (
    <div className="flex w-full flex-row">
      <SideBar className="flex w-64" />

      <div className="flex flex-col ml-20 space-y-10 w-2/3 bg-slate-400">
        {themes.map((theme) => (
          <section key={theme.id} className={`theme-${theme.theme} section-style`} id={theme.id}>
            <div className="flex flex-col w-3/4 items-center justify-center mx-auto p-8 
            bg-gradient-to-br from-skin-start via-skin-end rounded-2xl border-skin-base shadow-lg">
              <h2 className="text-3xl font-bold text-center text-skin-base mb-4">
                {theme.title}
              </h2>
              <p className="text-2xl text-center text-skin-muted mb-6">
                {theme.description}
              </p>
              <div className="text-lg text-center text-skin-inverted mb-6 bg-skin-button-accent p-4 rounded-lg">
                <p>Primary: {theme.colors.primary}</p>
                <p>Secondary: {theme.colors.secondary}</p>
                <p>Accent: {theme.colors.accent}</p>
                <p>Background: {theme.colors.background}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="h-12 w-40 p-2 rounded-2xl bg-skin-button-accent border-2 border-skin-base">
                  <span className="text-xl text-skin-inverted">Click here</span>
                </button>
                <button className="h-12 w-40 p-2 rounded-2xl bg-skin-button-accent-muted border-2 border-skin-muted">
                  <span className="text-xl text-skin-base">Click here</span>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ThemePage;
