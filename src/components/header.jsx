import React from "react";
import animations from "@midudev/tailwind-animations";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="w-screen lg:h-16 bg-slate-500">
      <div className="w-full h-full bg-[#111827] text-white flex flex-row border-solid shadow-lg">
        <div className="w-full h-full md:flex hidden flex-start items-center p-8">
          <img
            className="w-10 h-10 rounded-full animate-rotate-360 transform origin-center"
            src="/logo192.png"
            alt="logo"
          ></img>
        </div>
        <div className="w-full h-full flex flex-center justify-center items-center ">
          <p>
            <p className="text-2xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("</ Bienvenido >")
                    .start();
                }}
              />
            </p>
          </p>
        </div>
        <div className="w-full h-full flex flex-row flex-end justify-end items-center p-4"></div>
      </div>
    </div>
  );
}

export default Header;
